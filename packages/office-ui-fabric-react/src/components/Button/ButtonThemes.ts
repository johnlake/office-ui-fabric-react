import { IButtonStyles } from './Button.types';
import { ITheme, HighContrastSelector } from '../../Styling';

export function standardStyles(theme: ITheme): IButtonStyles {
  const s = theme.semanticColors;

  const buttonBackground = s.buttonBackground;
  const buttonBackgroundChecked = s.buttonBackgroundChecked;
  const buttonBackgroundHovered = s.buttonBackgroundHovered;
  const buttonBackgroundCheckedHovered = s.buttonBackgroundCheckedHovered;

  const buttonText = s.buttonText;
  const buttonTextHovered = s.buttonTextHovered;
  const buttonTextChecked = s.buttonTextChecked;
  const buttonTextCheckedHovered = s.buttonTextCheckedHovered;

  return {
    root: {
      backgroundColor: buttonBackground,
      color: buttonText
    },

    rootHovered: {
      backgroundColor: buttonBackgroundHovered,
      color: buttonTextHovered
    },

    rootPressed: {
      backgroundColor: buttonBackgroundChecked,
      color: buttonTextChecked
    },

    rootExpanded: {
      backgroundColor: buttonBackgroundChecked,
      color: buttonTextChecked
    },

    rootChecked: {
      backgroundColor: buttonBackgroundChecked,
      color: buttonTextChecked
    },

    rootCheckedHovered: {
      backgroundColor: theme.palette.neutralLight,
      color: buttonTextCheckedHovered
    },

    // Split button styles
    splitButtonContainer: {},

    splitButtonMenuButton: {
      color: theme.palette.white,
      backgroundColor: theme.palette.neutralLighter,
      selectors: {
        ':hover': {
          backgroundColor: theme.palette.neutralLight
        }
      },
    },

    splitButtonMenuButtonDisabled: {
      backgroundColor: theme.palette.neutralLighter,
      selectors: {
        ':hover': {
          backgroundColor: theme.palette.neutralLighter,
        }
      }
    },

    splitButtonDivider: {
      backgroundColor: theme.palette.neutralTertiaryAlt
    },

    splitButtonMenuButtonChecked: {
      backgroundColor: theme.palette.themePrimary,
    },

    splitButtonMenuButtonExpanded: {
      backgroundColor: theme.palette.neutralLight,
    },

    splitButtonMenuIcon: {
      color: theme.palette.neutralPrimary
    },

    splitButtonMenuIconDisabled: {
      color: theme.palette.neutralTertiary
    },
  };
}

export function primaryStyles(theme: ITheme): IButtonStyles {
  return {
    root: {
      backgroundColor: theme.palette.themePrimary,
      color: theme.palette.white,
      selectors: {
        [HighContrastSelector]: {
          color: 'Window',
          backgroundColor: 'WindowText',
          MsHighContrastAdjust: 'none'
        }
      }
    },

    rootHovered: {
      backgroundColor: theme.palette.themeDarkAlt,
      color: theme.palette.white,
      selectors: {
        [HighContrastSelector]: {
          color: 'Window',
          backgroundColor: 'WindowText',
          MsHighContrastAdjust: 'none'
        }
      }
    },

    rootPressed: {
      backgroundColor: theme.palette.themeDark,
      color: theme.palette.white,
      selectors: {
        [HighContrastSelector]: {
          color: 'Window',
          backgroundColor: 'WindowText',
          MsHighContrastAdjust: 'none'
        }
      }
    },

    rootExpanded: {
      backgroundColor: theme.palette.themeDark,
      color: theme.palette.white
    },

    rootChecked: {
      backgroundColor: theme.palette.themeDark,
      color: theme.palette.white,
    },

    rootCheckedHovered: {
      backgroundColor: theme.palette.themePrimary,
      color: theme.palette.white
    },

    rootDisabled: {
      selectors: {
        [HighContrastSelector]: {
          color: 'GrayText',
          borderColor: 'GrayText',
          backgroundColor: 'Window'
        }
      },
    },

    // Split button styles
    splitButtonContainer: {},

    splitButtonDivider: {
      backgroundColor: theme.palette.themeLighter
    },

    splitButtonMenuButton: {
      backgroundColor: theme.palette.themePrimary,
      color: theme.palette.white,
      selectors: {
        ':hover': {
          backgroundColor: theme.palette.themeDark
        }
      },
    },

    splitButtonMenuButtonDisabled: {
      backgroundColor: theme.palette.neutralLighter,
      selectors: {
        ':hover': {
          backgroundColor: theme.palette.neutralLighter,
        }
      }
    },

    splitButtonMenuButtonChecked: {
      backgroundColor: theme.palette.themeDark,
    },

    splitButtonMenuButtonExpanded: {
      backgroundColor: theme.palette.themeDark,
    },

    splitButtonMenuIcon: {
      color: theme.palette.white
    },

    splitButtonMenuIconDisabled: {
      color: theme.palette.neutralTertiary
    }
  };
}