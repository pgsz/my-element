/**
 * pg-container： 负责外层容器
 * pg-header： 顶部
 * pg-aside： 侧边栏
 * pg-main： 页面主体
 * pg-footer： 底部
 */

import PgContainer from './Container.vue'
import PgHeader from './Header.vue'
import PgFooter from './Footer.vue'
import PgMain from './Main.vue'
import PgAside from './Aside.vue'

export default [PgContainer, PgHeader, PgFooter, PgMain, PgAside]
