import React, { useContext } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/blog.module.css';
import Link from '../link';
import SingleBlog from './blog-card/blog-card';


function Blog({blogs}) {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            {blogs.length > 0 && (
                <div
                    className={styles.blog}
                    id="blog"
                    style={{ backgroundColor: theme.secondary }}>
                    <div className={styles.blogHeader}>
                        
                    </div>
                    <div className={styles.blogBody}>
                        <div className={styles.blogBodyContainer}>
                           
                        </div>

                        {blogs.length > 3 && (
                            <div className={styles.blogViewAll}>
                                                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Blog
