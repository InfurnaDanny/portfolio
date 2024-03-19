import {IProject} from "./interface/IProjects";


import LabTV from './../assets/labtv.jpg';
import LyricsSearch from './../assets/lyrics.jpg';
import WeatherJS from './../assets/weather.jpg';
import InLavorazione from './../assets/in lavorazione.jpg';
import PokémonType from './../assets/poketype.jpg';

export const AllProjects: IProject[]=[
    {
        url: 'https://github.com/InfurnaDanny/Labtv',
        src: LabTV,
        title: 'LabTV'
    }, 
    {
        url: 'http://pokesite.wuaze.com/#/home',
        src: PokémonType,
        title: 'PokémonType'
    },
    {
        url: 'https://github.com/InfurnaDanny/Labtv',
        src: LyricsSearch,
        title: 'LyricsSearch'
    },
    {
        url: 'https://github.com/InfurnaDanny/Labtv',
        src: WeatherJS,
        title: 'WeatherJS'
    },
    {
        url: 'https://github.com/InfurnaDanny/Labtv',
        src: InLavorazione,
        title: 'In lavorazione...'
    },

];