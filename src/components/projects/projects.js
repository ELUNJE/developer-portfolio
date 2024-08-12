import React, { useContext } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/theme-context';
import { projectsData } from '../../data/projects-data';
import styles from '../../styles/projects.module.css';
import Link from '../link';
import SingleProject from './project-card/project-card';

function Projects() {

    const { theme } = useContext(ThemeContext);


    return (
        <>
           

        </>
    )
}

export default Projects
