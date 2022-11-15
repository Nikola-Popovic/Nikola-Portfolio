import React from 'react';
import styled from 'styled-components';
import { ColorConstants } from '../styling/ColorConstants';
import { FONT_FAMILLY, spacingS } from '../styling/StylingConstants';
import { useTranslation } from 'react-i18next';
import i18next from '../lang/i18next';

export const APP_BAR_HEIGHT = '5vh';

const Bar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: ${spacingS};
    height: ${APP_BAR_HEIGHT};
    min-height: 10px;
    align-items: center;
    justify-content: center;
    font-family: ${FONT_FAMILLY};
    background-color: ${ColorConstants.PrimaryAccent};
`;

const NavLink = styled.a`
    display: block;
    position: relative;
    text-decoration: none;
    opacity: 0.6;
    padding: ${spacingS};
    margin: ${spacingS};
    color: ${ColorConstants.PrimaryAccent};
    color: white;
    font-size: 1.2em;
    overflow: hidden;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 0.1em;
        bottom: 0;
        left: 0;
        background-color: ${ColorConstants.PrimaryAccent};
        background-color: white;
        opacity: 1;
        transition: opacity 300ms, transform 300ms;
        transform: translate3d(-100%, 0, 0);
    }
    &:hover::after,
    &:focus::after {
        transform: translate3d(0, 0, 0);
    }
`;
export function NavBar() {
  const { t } = useTranslation('translation', { i18n: i18next });
  return <Bar>
    <NavLink> {t('nav.home')} </NavLink>
    <NavLink> {t('nav.aboutMe')} </NavLink>
    <NavLink> {t('nav.projects')} </NavLink>
    <NavLink> {t('nav.contact')} </NavLink>
  </Bar>;
}