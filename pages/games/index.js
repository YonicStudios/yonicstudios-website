import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"

import { getAllArticlesByType, getArticleBySlug } from '../../lib/mdx'

export default function Games({articles}) {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
        <motion.div transition={{duration: 0.5}} initial="hidden" animate="visible" exit="hidden" variants={variants}>
            <Head>
                <title>Games | YonicStudios</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Games</h1>
            { articles.map(article => <Link key={article.slug} href={`/games/${article.slug}`}><a>{article.title}</a></Link>)}
        </motion.div>
    )
}

export async function getStaticProps() {
    const files = await getAllArticlesByType('games');
    const articlesMetadata = await Promise.all(files.map(async (file) => {
        const { frontmatter } = await getArticleBySlug('games', file);
        return frontmatter;
    }));

    return {
        props: {
            articles: articlesMetadata
        }
    }
}