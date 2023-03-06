export const fetchMarkdownPosts = async () => {
     
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        // @ts-ignore
        const { metadata } = await resolver()
        // since we know every post file path will begin with
        // /src/routes and end with .md we can remove those chars
        const postPath = path.slice(11, -3)
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    return allPosts
  }
