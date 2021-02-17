import React from 'react'
import {  PageHeader, Table, Button, Modal, Row, Col, Avatar } from 'antd';

function onChange(pagination, filters, sorter, extra) {
	console.log('params', pagination, filters, sorter, extra);
  }

const columns = [
	{
		title: 'Daftar Unit Cakupan',
		dataIndex: 'daftar_unit_cakupan',
		onFilter: (value, record) => record.daftar_unit_cakupan.indexOf(value) === 0,
		sorter: (a, b) => a.daftar_unit_cakupan.length - b.daftar_unit_cakupan.length,
		sortDirections: ['descend', 'ascend'],
		render: (text, record) => (
			<Row>
				<Col span={5}><Avatar size={35} src={record.avatar} /></Col>
				<Col span={19}>{record.daftar_unit_cakupan}</Col>
			</Row>	
		)
	},
];

const unit_kewenangan = [
	// {
	// 	id: 1,
	// 	avatar: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png',
	// 	daftar_pegawai: "Kukuh Tri Winarno",
	// 	unit_kerja: "Divisi Humas DISPENDUK JEMBER",
	// 	jabatan: "Kepala Divisi Humas",
	// 	plt:'Tidak',
	// 	tgl_mulai:'-',
	// 	tgl_selesai:'-'
	// },
	// {
	// 	id: 2,
	// 	avatar: 'https://i.pinimg.com/564x/a7/66/92/a766923c29305a16ce461b2ae54f4c68.jpg',
	// 	daftar_pegawai: "Tamara Elo",
	// 	unit_kerja: "Divisi Keuangan DISPENDUK JEMBER",
	// 	jabatan: "Kepala Divisi Keuangan",
	// 	plt:'Ya',
	// 	tgl_mulai:'12 Januari 2020',
	// 	tgl_selesai:'20 Desember 2020'
	// },
	
]

const columnUnit_Kewenangan= [
	{
		title: 'Daftar Unit Cakupan ',
		dataIndex: 'daftar_unit_cakupan',
		onFilter: (value, record) => record.daftar_unit_cakupan.indexOf(value) === 0,
		sorter: (a, b) => a.daftar_unit_cakupan.length - b.daftar_unit_cakupan.length,
		sortDirections: ['descend', 'ascend'],
		render: (text, record) => (
			<Row>
				<Col span={5}><Avatar size={35} src={record.avatar} /></Col>
				<Col span={19}>{record.daftar_unit_cakupan}</Col>
			</Row>	
		)
	},
	{
		render: () => (
			<Button style={{color: "#39c878", borderWidth: 1, borderColor: "#39c878", fontWeight: "bold"}}>+ PILIH</Button>
		)
	},
]

class unit_kewenanganProfileView extends React.Component {
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
	const { loading } = this.state;
    return (
		<div>
			<PageHeader title={('Unit Kewenangan')} >
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
							TAMBAHKAN UNIT KEWENANGAN
						</Button>
					</div>
				]}
			>
				<Table tableLayout="auto" columns={columnUnit_Kewenangan} dataSource={unit_kewenangan} onChange={onChange} />
				<Row>
					<Col span={8}>
						<div>
							Daftar Unit Cakupan Terpilih
						</div>
					</Col>
					<Col span={16} style={{textAlign: "right"}}>
						<div>
							{/* <Avatar size={43} style={{marginRight: 15}} src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-aperture.jpg" />
							<Avatar size={43} style={{marginRight: 15}} src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-aperture.jpg" />
							<Avatar size={43} style={{marginRight: 15}} src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-aperture.jpg" /> */}
						</div>
					</Col>
				</Row>
       		</Modal>

			  <Table columns={columns} dataSource={unit_kewenangan} onChange={onChange} />
			  
		</PageHeader>
	
		</div>
    );
  }
}

export default unit_kewenanganProfileView;
