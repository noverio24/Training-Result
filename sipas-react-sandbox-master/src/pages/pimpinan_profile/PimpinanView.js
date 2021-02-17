import React from 'react'
import { Tabs, PageHeader, Table, 
	Button, Modal, Row, Col, Avatar, Checkbox, label } from 'antd';

const { TabPane } = Tabs;


function onChange(pagination, filters, sorter, extra) {
	console.log('params', pagination, filters, sorter, extra);
  }

const columns = [
	{
		title: 'Daftar Pegawai',
		dataIndex: 'daftar_pegawai',
		onFilter: (value, record) => record.daftar_pegawai.indexOf(value) === 0,
		sorter: (a, b) => a.daftar_pegawai.length - b.daftar_pegawai.length,
		sortDirections: ['descend', 'ascend'],
		render: (text, record) => (
			<Row>
				<Col span={5}><Avatar size={35} src={record.avatar} /></Col>
				<Col span={19}>{record.daftar_pegawai}</Col>
			</Row>
			
		)
	},
	
	{
		title: 'Unit Kerja',
		dataIndex: 'unit_kerja',
		onFilter: (value, record) => record.unit_kerja.indexOf(value) === 0,
		sorter: (a, b) => a.unit_kerja.length - b.unit_kerja.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Jabatan',
		dataIndex: 'jabatan',
		onFilter: (value, record) => record.jabatan.indexOf(value) === 0,
		sorter: (a, b) => a.jabatan.length - b.jabatan.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'PLT',
		dataIndex: 'plt',
		onFilter: (value, record) => record.plt.indexOf(value) === 0,
		sorter: (a, b) => a.plt.length - b.plt.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		render: () => (
			
			<Checkbox
			defaultChecked={"Ya"}
          >
            {/* {label} */}
          </Checkbox>
		)
	},
	{
		title: 'Tgl.Mulai',
		dataIndex: 'tgl_mulai',
		onFilter: (value, record) => record.tgl_mulai.indexOf(value) === 0,
		sorter: (a, b) => a.tgl_mulai.length - b.tgl_mulai.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Tgl.Selesai',
		dataIndex: 'tgl_selesai',
		onFilter: (value, record) => record.tgl_selesai.indexOf(value) === 0,
		sorter: (a, b) => a.tgl_selesai.length - b.tgl_selesai.length,
		sortDirections: ['descend', 'ascend'],
	},
  ];

const pimpinan = [
	{
		id: 1,
		avatar: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png',
		daftar_pegawai: "Kukuh Tri Winarno",
		unit_kerja: "Divisi Humas DISPENDUK JEMBER",
		jabatan: "Kepala Divisi Humas",
		plt:'Tidak',
		tgl_mulai:'-',
		tgl_selesai:'-'
	},
	{
		id: 2,
		avatar: 'https://i.pinimg.com/564x/a7/66/92/a766923c29305a16ce461b2ae54f4c68.jpg',
		daftar_pegawai: "Tamara Elo",
		unit_kerja: "Divisi Keuangan DISPENDUK JEMBER",
		jabatan: "Kepala Divisi Keuangan",
		plt:'Ya',
		tgl_mulai:'12 Januari 2020',
		tgl_selesai:'20 Desember 2020'
	},
	
]

const columnPimpinan = [
	{
		title: 'Daftar Pegawai',
		dataIndex: 'daftar_pegawai',
		onFilter: (value, record) => record.daftar_pegawai.indexOf(value) === 0,
		sorter: (a, b) => a.daftar_pegawai.length - b.daftar_pegawai.length,
		sortDirections: ['descend', 'ascend'],
		render: (text, record) => (
			<Row>
				<Col span={5}><Avatar size={35} src={record.avatar} /></Col>
				<Col span={19}>{record.daftar_pegawai}</Col>
			</Row>
			
		)

	},
	{
		title: 'Unit Kerja',
		dataIndex: 'unit_kerja',
		onFilter: (value, record) => record.unit_kerja.indexOf(value) === 0,
		sorter: (a, b) => a.unit_kerja.length - b.unit_kerja.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		title: 'Jabatan',
		dataIndex: 'jabatan',
		onFilter: (value, record) => record.jabatan.indexOf(value) === 0,
		sorter: (a, b) => a.jabatan.length - b.jabatan.length,
		sortDirections: ['descend', 'ascend'],
	},
	{
		render: () => (
			<Button style={{color: "#39c878", borderWidth: 1, borderColor: "#39c878", fontWeight: "bold"}}>+ PILIH</Button>
		)
	},
	
]

class PimpinanView extends React.Component {
  state = {
	current: 'mail',
	loading: false,
    visible: false,
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
	const { visible, loading } = this.state;
    return (
		<div>
			<PageHeader title={('Pimpinan')} >
			<Button type="primary" onClick={this.showModal} data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
				Tambah
			</Button>
			
			<Modal
				visible={this.state.visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
				style={{ top: 20 }}
				width={1024}
				footer={[
					<div style={{textAlign: "center"}}>
						<Button key="submit" style={{ fontSize: 12, backgroundColor: "#39c878", color: "white", fontWeight: "bold" }} loading={loading} onClick={this.handleOk}>
							TAMBAHKAN PIMPINAN
						</Button>
					</div>
				]}
			>
				<Table tableLayout="auto" columns={columnPimpinan} dataSource={pimpinan} onChange={onChange} />
				<Row>
					<Col span={8}>
						<div>
							Pegawai Terpilih
						</div>
					</Col>
					<Col span={16} style={{textAlign: "right"}}>
						<div>
							<Avatar size={43} style={{marginRight: 15}} src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-aperture.jpg" />
							<Avatar size={43} style={{marginRight: 15}} src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-aperture.jpg" />
							<Avatar size={43} style={{marginRight: 15}} src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-aperture.jpg" />
						</div>
					</Col>
				</Row>
       		</Modal>

			  <Table columns={columns} dataSource={pimpinan} onChange={onChange} />
			  
		</PageHeader>
	
		</div>
    );
  }
}

export default PimpinanView;
