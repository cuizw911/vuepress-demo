module.exports = {
    title: 'Hello VuePress | Amazing',
    description: 'Just playing around',
    themeConfig: {
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }],
        ],
        // 导航菜单
        nav: [
           // { text: 'Home', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '配置', link: '/config/' },
            { text: '主题', link: '/theme/' },
            { text: 'Github', link: 'https://github.com' },
        ],
        // 侧边栏菜单
        sidebar: {
            '/guide/': [
             {
                title: 'Golang',
                collapsable: false, 
				children: [
                    ['/guide/', '介绍'],
                    ['/guide/guide-001', '快速上手'],
                    ['/guide/guide-002', '目录结构'],
                    ['/guide/guide-003', '基本配置'],
                    ['/guide/guide-004', '静态资源'],
				]
            }, {
                title: '深入',
                collapsable: false,
                children: [
                    ['/guide/guide-005', 'Front Matter'],
                    ['/guide/guide-006', '永久链接'],
                    ['/guide/guide-007', 'Markdown 插槽'],
                    ['/guide/guide-008', '全局计算属性'],
                ]
            }],
            '/config/': [
                {
                    title: '配置',
                    collapsable: false,
                    children: [
                        ['/config/config-001', '基本配置'],
                        ['/config/config-002', '构建流程'],
                        ['/config/config-003', '浏览器兼容性'],
                        ['/config/about', '关于配置'],
                    ]
                }
            ]
        }
    }

}