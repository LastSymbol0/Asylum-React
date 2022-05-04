/**
 * @author Den Kravchu <denkravchu@gmail.com>
 * @fileoverview Small library which makes work with coordinates faster and easier. Animate your website supafast!
 * @version 2.0.0_draft
 */

export default {
    mouse: null,
    handlers: [],

    // todo сделать нормальный выброс ошибок
    getElementCoords(domElement) {
        if (!domElement) { return 'error' }
        return {
            top: domElement.getBoundingClientRect().top + window.scrollY,
            bottom: domElement.getBoundingClientRect().bottom + window.scrollY,
            left: domElement.getBoundingClientRect().left + window.scrollX,
            right: domElement.getBoundingClientRect().right + window.scrollX,
            height: domElement.getBoundingClientRect().height,
            width: domElement.getBoundingClientRect().width,
        }
    },
    getScrollCoordsFromElement(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        if (domElementCoords === 'error') { 
            console.error("getScrollCoordsFromElement: No domElement found")
            return { windowTop: null, windowBottom: null } 
        }
        return {
            windowTop: {
                fromTop: window.scrollY - domElementCoords.top,
                fromBetweenTopMiddle: window.scrollY - (domElementCoords.top + domElementCoords.height / 4),
                fromMiddle: window.scrollY - (domElementCoords.top + domElementCoords.height / 2),
                fromBetweenMiddleBottom: window.scrollY - (domElementCoords.bottom - domElementCoords.height / 4),
                fromBottom: window.scrollY - domElementCoords.bottom
            },
            windowBottom: {
                fromTop: window.scrollY + window.innerHeight - domElementCoords.top,
                fromBetweenTopMiddle: window.scrollY + window.innerHeight - (domElementCoords.top + domElementCoords.height / 4),
                fromMiddle: window.scrollY + window.innerHeight - (domElementCoords.top + domElementCoords.height / 2),
                fromBetweenMiddleBottom: window.scrollY + window.innerHeight - (domElementCoords.bottom - domElementCoords.height / 4),
                fromBottom: window.scrollY + window.innerHeight - domElementCoords.bottom
            }
        }
    },
    getMouseWindowCoords() {
        if (this.mouse === null) return { x: null, y: null }
        return {
            x: this.mouse.clientX,
            y: this.mouse.clientY,
        }
    },
    getMouseDocumentCoords() {
        if (this.mouse === null) return { x: null, y: null }
        return {
            x: this.mouse.pageX,
            y: this.mouse.pageY,
        }
    },
    // todo: добавить возможность получения координат относительно любого угла
    getMouseCoordsFromElement(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        if (domElementCoords === 'error') { 
            console.error("getMouseCoordsFromElement: No domElement found")
            return {} 
        }
        const mouseCoords = this.getMouseDocumentCoords()
        return {
            x: mouseCoords.x - (domElementCoords.left + domElementCoords.width / 2),
            y: mouseCoords.y - (domElementCoords.top + domElementCoords.height / 2),
        }
    },
    getMouseCoordsFromElementCorner(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        if (domElementCoords === 'error') { 
            console.error("getMouseCoordsFromElementCorner: No domElement found")
            return {} 
        }
        const mouseCoords = this.getMouseDocumentCoords()
        return {
            x: mouseCoords.x - (domElementCoords.left),
            y: mouseCoords.y - (domElementCoords.top),
        }
    },

    // todo: сделать, чтобы возвращался объект по вертикали и горизонтали типо { part: { x: true, y: false }, full: ... }
    isElementVisible(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        if (domElementCoords === 'error') { 
            console.error("isElementVisible: No domElement found")
            return false 
        }
        return (domElementCoords.bottom >= window.scrollY && domElementCoords.top <= window.scrollY + window.innerHeight)
    },
    isElementVisibleX(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        if (domElementCoords === 'error') { 
            console.error("isElementVisibleX: No domElement found")
            return false 
        }
        return (domElementCoords.right >= 0 && domElementCoords.left <= window.innerWidth)
    },
    isElementFullyVisible(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        if (domElementCoords === 'error') { 
            console.error("isElementFullyVisible: No domElement found")
            return false 
        }
        return (domElementCoords.bottom <= window.scrollY + window.innerHeight && domElementCoords.top >= window.scrollY)
    },

    isElementHovered(domElement, additionalRadius = 0) {
        const domElementCoords = this.getElementCoords(domElement)
        if (domElementCoords === 'error') { 
            console.error("isElementHovered: No domElement found")
            return false 
        }
        const mouseCoords = this.getMouseDocumentCoords()
        return (domElementCoords.top - additionalRadius < mouseCoords.y && domElementCoords.bottom + additionalRadius > mouseCoords.y && domElementCoords.left - additionalRadius < mouseCoords.x && domElementCoords.right + additionalRadius > mouseCoords.x)
    },

    useMouseEvent(domElement = document) {
        domElement.addEventListener('mousemove', function(event) {
            this.mouse = event
            domElement.dispatchEvent(new CustomEvent("mouseupdate", {
                bubbles: true, 
                detail: {
                    documentCoords: this.getMouseDocumentCoords(),
                    windowCoords: this.getMouseWindowCoords(),
                }
            }))
        }.bind(this))
        domElement.addEventListener('mouseenter', function(event) {
            this.mouse = event
            domElement.dispatchEvent(new CustomEvent("mouseupdate", {
                bubbles: true, 
                detail: {
                    documentCoords: this.getMouseDocumentCoords(),
                    windowCoords: this.getMouseWindowCoords(),
                }
            }))
        }.bind(this))
    },

    setToRender({ label, handler, props, context, renderDelay, breakpoint, onBreakpoint }) {
        const newLabel = label || this.handlers.length
        if (!handler) { console.error(`Renderer: Handler for render is required. Handler label "${newLabel}"`); return }
        if (typeof handler !== "function") { console.error(`Renderer: Invalid type of handler, required Function. Handler label "${newLabel}"`); return }
        if (breakpoint && typeof breakpoint !== "number") { console.error(`Renderer: Invalid type of breakpoint, required Number. Handler label "${newLabel}"`); return }
        if (onBreakpoint && typeof onBreakpoint !== "function") { console.error(`Renderer: Invalid type of onBreakpoint, required Function. Handler label "${newLabel}"`); return }

        const toRender = {
            rendering: null,
            handler,
            context,
            props,
            label: newLabel,
            renderDelay: renderDelay || 0,
            startTime: performance.now(),
            breakpoint: breakpoint || 0,
            onBreakpoint,
            readyForBreakpointCallback: true
        }

        toRender.rendering = function(time) {
            if (time - this.startTime >= this.renderDelay) {
                this.startTime = performance.now()
                if (window.innerWidth <= this.breakpoint) { 
                    if (this.readyForBreakpointCallback && this.onBreakpoint) {
                        this.onBreakpoint() 
                        this.readyForBreakpointCallback = false
                    }
                    return 
                }
                this.handler.apply(this.context, [...this.props || [], time])
                this.readyForBreakpointCallback = true
            }
        }.bind(toRender),

        this.handlers.push(toRender)
    },

    removeFromRender(label = 'removeLastFromRender') {
        let isRequested = 0
        if (label === 'removeLastFromRender') {this.handlers = this.handlers.slice(0, this.handlers.length - 1); return }
        this.handlers = this.handlers.filter(item => {
            if (item.label !== label) {
                return true
            }
            isRequested++
            return false
        })
        if (isRequested === 0) { console.warn(`Renderer: No handlers with label "${label}" in rendering`) }
    },
    getRendering() {
        return this.handlers
    },
    render() {
        requestAnimationFrame(function render(time) {
            this.handlers.forEach(item => item.rendering(time))
            requestAnimationFrame(render.bind(this))
        }.bind(this))
    },
}
