import { css } from 'styled-components'

import NunitoLight from '../fonts/Nunito/Nunito-Light.ttf'
import NunitoRegular from '../fonts/Nunito/Nunito-Regular.ttf'
import NunitoMedium from '../fonts/Nunito/Nunito-Medium.ttf'
import NunitoSemibold from '../fonts/Nunito/Nunito-SemiBold.ttf'

import NunitoRegularItalic from '../fonts/Nunito/Nunito-Italic.ttf'
import NunitoMediumItalic from '../fonts/Nunito/Nunito-MediumItalic.ttf'
import NunitoSemiboldItalic from '../fonts/Nunito/Nunito-SemiBoldItalic.ttf'

const nunitoNormalWeights = {
    300: NunitoLight,
    400: NunitoRegular,
    500: NunitoMedium,
    600: NunitoSemibold
}

const nunitoItalicWeights = {
    400: NunitoRegularItalic,
    500: NunitoMediumItalic,
    600: NunitoSemiboldItalic
}

const nunito = {
    name: 'Nunito',
    normal: nunitoNormalWeights,
    italic: nunitoItalicWeights
}

const createFontFaces = (family, style = 'normal') => {
    let styles = ''

    for (const [weight, file] of Object.entries(family[style])) {
        styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${file}) format('ttf');
                font-weight: ${weight};
                font-style: ${styles};
                font-display: auto;
            }
        `
    }

    return styles
}

const nunitoNormal = createFontFaces(nunito)
const nunitoItalic = createFontFaces(nunito, 'italic')

const Fonts = css`
    ${nunitoNormal + nunitoItalic}
`

export default Fonts;