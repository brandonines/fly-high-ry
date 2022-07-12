export default {
    name:'post',
    type: 'document',
    title:'Submission',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: { type: 'author' },
        },
        {
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            options: {
                hotspot: true,
            }
        },
        // Decide if you want to include categories
        // {
        //     name: 'categories',
        //     type: 'array',
        //     title: 'Categories',
        //     of: [{ type: 'reference', to: { type:'category' } }]
        // },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'body',
            type: 'blockContent',
            title: 'Body',
        }
    ]
}