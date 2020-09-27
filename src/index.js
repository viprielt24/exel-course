import {Excel} from '@/components/excel/Excel';
import './scss/index.scss'
import {Formula} from '@/components/formula/Formula';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Table} from '@/components/table/Table';

const excel = new Excel('#app', {
	components: [Header, Toolbar, Formula, Table]
})

excel.render()