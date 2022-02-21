import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

const readDir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

export async function getAllArticlesByType(type) {
    const dir = await readDir(path.join(root, "articles", type));
    const articleFiles = dir.filter(val => /\.mdx$/.test(val));
    return articleFiles;
}

export async function getArticleBySlug(type, slug) {
    const contents = await readFile(path.join(root, "articles", type, slug), "utf8");
    const data = await serialize(contents,{ parseFrontmatter: true})

    return data;
}