import React, {lazy }from 'react'
import { Tabs, PageHeader, Table } from 'antd';

const { TabPane } = Tabs;


function onChange(pagination, filters, sorter, extra) {
	console.log('params', pagination, filters, sorter, extra);
  }

const columns = [
	{
	  title: 'Tanggal',
	  dataIndex: 'tanggal',
	  filters: [
		{
		  text: 'Joe',
		  value: 'Joe',
		},
		{
		  text: 'Jim',
		  value: 'Jim',
		},
		{
		  text: 'Submenu',
		  value: 'Submenu',
		  children: [
			{
			  text: 'Green',
			  value: 'Green',
			},
			{
			  text: 'Black',
			  value: 'Black',
			},
		  ],
		},
	  ],
	  // specify the condition of filtering result
	  // here is that finding the name started with `value`
	  onFilter: (value, record) => record.tanggal.indexOf(value) === 0,
	  sorter: (a, b) => a.tanggal.length - b.tanggal.length,
	  sortDirections: ['descend'],
	},
	{
	  title: 'Akun',
	  dataIndex: 'akun',
	  defaultSortOrder: 'descend',
	  sorter: (a, b) => a.akun - b.akun,
	},
	{
	  title: 'Aksi',
	  dataIndex: 'aksi',
	  filters: [
		{
		  text: 'London',
		  value: 'London',
		},
		{
		  text: 'New York',
		  value: 'New York',
		},
	  ],
	  filterMultiple: false,
	  onFilter: (value, record) => record.aksi.indexOf(value) === 0,
	  sorter: (a, b) => a.aksi.length - b.aksi.length,
	  sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Kode',
		dataIndex: 'kode',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.kode - b.kode,
	  },
  ];
  
  const data = [
	{
	  key: '1',
	  tanggal: '23 Jul 2020 09:46',
	  akun: 'Administrator',
	  aksi: 'buat',
	  kode: 'FORM REKOMENDASI PELATIHAN KHUSUS REVISI'
	},
	{
	  key: '2',
	  tanggal: '27 Jul 2020 11:13',
	  akun: 'Administrator',
	  aksi: 'ubah',
	  kode: 'Form SOP Rekom Promosi'
	},
	{
	  key: '3',
	  tanggal: '28 Jul 2020 09:46',
	  akun: 'Administrator',
	  aksi: 'buat',
	  kode: 'FORM REKOMENDASI PELATIHAN KHUSUS REVISI'
	},
	{
	  key: '4',
	  tanggal: '28 Jul 2020 09:46',
	  akun: 'Administrator',
	  aksi: 'ubah',
	  kode: 'FORM REKOMENDASI PELATIHAN KHUSUS REVISI'
	},
  ];

class AuditView extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
   
    return (
		<PageHeader title={('Audit Trail')} >
			<Tabs defaultActiveKey="1">
				<TabPane tab="MUAT ULANG" key="1">
				</TabPane>
	  		</Tabs>
			  <Table columns={columns} dataSource={data} onChange={onChange} />
		</PageHeader>
		
    );
  }
}

export default AuditView;
