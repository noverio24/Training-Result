import React from 'react'
import { Tabs, PageHeader, Table, Button, Modal } from 'antd';

const { TabPane } = Tabs;


function onChange(pagination, filters, sorter, extra) {
	console.log('params', pagination, filters, sorter, extra);
  }

const columns = [
	{
	  title: 'Nomor Urut',
	  dataIndex: 'nomor',
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
	  onFilter: (value, record) => record.nomor.indexOf(value) === 0,
	  sorter: (a, b) => a.nomor.length - b.nomor.length,
	  sortDirections: ['descend'],
	},
	{
	  title: 'Model',
	  dataIndex: 'model',
	  defaultSortOrder: 'descend',
	  sorter: (a, b) => a.model - b.model,
	},
	{
	  title: 'Tahun',
	  dataIndex: 'tahun',
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
	  onFilter: (value, record) => record.tahun.indexOf(value) === 0,
	  sorter: (a, b) => a.tahun.length - b.tahun.length,
	  sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Jenis',
		dataIndex: 'jenis',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.jenis - b.jenis,
	},
	{
		title: 'Klasifikasi',
		dataIndex: 'klasifikasi',
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
		onFilter: (value, record) => record.klasifikasi.indexOf(value) === 0,
		sorter: (a, b) => a.klasifikasi.length - b.klasifikasi.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Sifat',
		dataIndex: 'sifat',
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
		onFilter: (value, record) => record.sifat.indexOf(value) === 0,
		sorter: (a, b) => a.sifat.length - b.sifat.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Lokasi',
		dataIndex: 'lokasi',
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
		onFilter: (value, record) => record.lokasi.indexOf(value) === 0,
		sorter: (a, b) => a.lokasi.length - b.lokasi.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Unit Pembuat',
		dataIndex: 'unitpembuat',
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
		onFilter: (value, record) => record.unitpembuat.indexOf(value) === 0,
		sorter: (a, b) => a.unitpembuat.length - b.unitpembuat.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Unit Penyetuju',
		dataIndex: 'unitpenyetuju',
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
		onFilter: (value, record) => record.unitpenyetuju.indexOf(value) === 0,
		sorter: (a, b) => a.unitpenyetuju.length - b.unitpenyetuju.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Jabatan Pembuat',
		dataIndex: 'jabatanpembuat',
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
		onFilter: (value, record) => record.jabatanpembuat.indexOf(value) === 0,
		sorter: (a, b) => a.jabatanpembuat.length - b.jabatanpembuat.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Jabatan Penyetuju',
		dataIndex: 'jabatanpenyetuju',
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
		onFilter: (value, record) => record.jabatanpenyetuju.indexOf(value) === 0,
		sorter: (a, b) => a.jabatanpenyetuju.length - b.jabatanpenyetuju.length,
		sortDirections: ['descend', 'ascend'],
	},
  ];
  
  const data = [
	{
	  key: '1',
	  nomor: 2,
	  model: 'Tidak dibedakan internal/eksternal ',
	  tahun: '0',
	  jenis: '',
	  klasifikasi: '',
	  sifat: '',
	  lokasi: '',
	  unitpembuat: '',
	  unitpenyetuju: '',
	  jabatanpembuat: '',
	  jabatanpenyetuju: ''
	},
	{
	  key: '2',
	  nomor: 31,
	  model: 'No. Registrasi',
	  tahun: '2020',
	  jenis: '',
	  klasifikasi: '',
	  sifat: '',
	  lokasi: '',
	  unitpembuat: '',
	  unitpenyetuju: '',
	  jabatanpembuat: '',
	  jabatanpenyetuju: ''
	},
	{
	  key: '3',
	  nomor: 77,
	  model: 'No. Registrasi',
	  tahun: '2019',
	  jenis: '',
	  klasifikasi: '',
	  sifat: '',
	  lokasi: '',
	  unitpembuat: '',
	  unitpenyetuju: '',
	  jabatanpembuat: '',
	  jabatanpenyetuju: ''
	},
	{
	  key: '4',
	  nomor: 8,
	  model: 'Eksternal',
	  tahun: '2019',
	  jenis: 'instruksi',
	  klasifikasi: '',
	  sifat: '',
	  lokasi: '',
	  unitpembuat: 'unit teknis',
	  unitpenyetuju: '',
	  jabatanpembuat: '',
	  jabatanpenyetuju: ''
	},
  ];

class PenomoranView extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
   
    return (
		<div>
			<PageHeader title={('Penomoran Surat')} >
			<Button type="primary" onClick={this.showModal} data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
				Tambah
			</Button>
			
			<Modal
				title="Penomoran Surat"
				visible={this.state.visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
			>
				<div>
					<label type="input">No</label>
				</div>
				<p>Some contents...</p>
				<p>Some contents...</p>
       		 </Modal>
			<Tabs defaultActiveKey="1">
				<TabPane tab="MUAT ULANG" key="1">
				</TabPane>
	  		</Tabs>
			  <Table columns={columns} dataSource={data} onChange={onChange} />
			  
		</PageHeader>
	
		</div>
    );
  }
}

export default PenomoranView;
