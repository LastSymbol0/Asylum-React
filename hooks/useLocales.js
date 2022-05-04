import { useState } from "react"
import _ from 'lodash'

import translationEn from '../locales/en/translation.json'

export const useLocales = (id) => {
    const [content, setContent] = useState({ ..._.get(translationEn, id) })
    return content
}