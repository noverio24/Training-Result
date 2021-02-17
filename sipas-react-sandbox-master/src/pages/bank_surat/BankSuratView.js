import React from 'react';
import { Drawer, List, Avatar, Divider, Col, Row, Badge, Input, Steps,Timeline} from 'antd';
import { ClockCircleOutlined, DownOutlined } from '@ant-design/icons';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
  
);

const { TextArea } = Input;

const { Step } = Steps;

class BankSuratView extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col span={20}>
            <Input.Search
							allowClear
							placeholder='Keluarkan kata kunci..'
							style={{ width: '300px' , marginLeft: '750px'}}
						/>
          </Col>
        </Row>
        <div>
          <Row>
            <Col span={4}>
              <th>Tipe Surat</th>
            </Col>
            <Col span={6}>
              <th>Surat</th>
            </Col>
            <Col span={4}>
              <th>Status</th>
            </Col>
            <Col span={2}>
              <th>Tembusan</th>
            </Col>
            <Col span={2}>
              <th>Berkas</th>
            </Col>
            <Col span={3}>
              <th>Tgl.Terima</th>
            </Col>
          </Row>
        </div>
        <List
          dataSource={[
            {
              name: 'Lily',
              jenis_surat: 'Masuk Eksternal', 
              status: 'Belum Terbaca', 
              nomor_surat: '055/DKA/06/2019', 
              instansi:'PT Semangat Jaya Indonesia',
              from: 'Direktur Utama SIPAS', 
              tanggal_terima: 'hari ini', 
              type_surat: 'UM Umum', 
              judul_surat: 'Undangan Memperingati AIDS Sedunia', 
              berkas: '-', 
              tembusan: '-', 
              icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
              id: 1, 
              icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg'
            },
            {
              name: 'Lily',
              jenis_surat: 'Masuk Eksternal', 
              status: 'Belum Terbaca', 
              nomor_surat: '055/DKA/06/2019', 
              from: 'Bapak Kepala Dinas', 
              tanggal_terima: 'hari ini', 
              type_surat: 'UM Umum', 
              judul_surat: 'Kerjasama antar vendor', 
              berkas: '-', 
              tembusan: '-', 
              icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
              id: 2, 
              icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg'
            },
          ]}
          bordered
          renderItem={item => (
            
            <List.Item
              key={item.id}
              actions={[
                <p onClick={this.showDrawer} key={`a-${item.id}`}>
                  View Detail
                </p>,
              ]}
            >
               
               <Col span={3}>                         
                  <span><h5>{item.type_surat}</h5></span>
                  <span><h5>{item.jenis_surat}</h5></span>
                </Col>
              <List.Item.Meta
                avatar={
                  <Badge dot offset={[-43,5]}>
                  <Avatar size={60} src={item.icon}></Avatar>
                  </Badge>
                }
                title={item.judul_surat}
                description={item.from}
              />
               <List.Item.Meta
                avatar={
                  <Avatar  shape="square" size={20} src={item.icon_status}></Avatar>
                }
                title={item.status}
              />
              <Col span={2}>                         
                  <span><h5>{item.tembusan}</h5></span>
              </Col>
              <Col span={2}>                         
                  <span><h5>{item.berkas}</h5></span>
              </Col>
              <Col span={3}>                         
                  <span><h5>{item.tanggal_terima}</h5></span>
              </Col>
            </List.Item>
          )}
        />
        <List
          dataSource={[
            {
              name: 'Lily',
              jenis_surat: 'Masuk Eksternal', 
              status: 'Belum Terbaca', 
              nomor_surat: '055/DKA/06/2019', 
              instansi:'PT Semangat Jaya Indonesia',
              from: 'Direktur Utama SIPAS', 
              tanggal_terima: 'hari ini', 
              type_surat: 'UM Umum', 
              judul_surat: 'Undangan Memperingati AIDS Sedunia',
              uraian_agenda:'Acara Perusahaan/Kedinasan', 
              sifat_surat:'Sangat Rahasia',
              lokasi_arsip:'Kabinet Dokumen Biasa',
              media_surat: 'Aplikasi TEO',
              berkas: '-', 
              tembusan: '-', 
              icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
              id: 1, 
              icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg'
            },
          ]}
          bordered
          renderItem={item =>(
        <Drawer
          width={900}
          placement="right"
          closable={false}
          dataSource={this.item}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Row>
            <Col span={20}>
            <h2 className="site-description-item-profile-p" style={{ marginBottom: 5 }}>
              {item.judul_surat}
            </h2>
            <h4 className="site-description-item-profile-p" style={{ marginBottom: 5 }}>
             {item.instansi}
            </h4>
            <h5 className="site-description-item-profile-p" style={{ marginBottom: 10 }}>
              {item.from}
            </h5>
            </Col>
           <Col span={4}><Avatar shape="square" size={100} src='https://www.jobsoid.com/wp-content/uploads/2020/04/Job-Offer-Letter.svg' ></Avatar></Col>
          </Row>

          <Row>
            <Col span={1}>
              <Avatar shape="square" size={25} src='https://cdn.iconscout.com/icon/free/png-256/r-characters-character-alphabet-letter-36029.png' ></Avatar> &nbsp; &nbsp;
            </Col>
            <Col span={12}>
              <span>Surat ini ditandai Rahasia</span><br />
              <i>* Surat hanya bisa dibuka oleh pembuat, penyetuju, dan penerima</i>
            </Col>
            <Col span={11}>
              <h4>Status Surat : Terdistribusikan</h4>
                <Timeline>
                 <Timeline.Item>
                   <h5>Surat Diinputkan oleh:</h5>
                 </Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                  Technical testing 2015-09-01
                </Timeline.Item>
                </Timeline>,
            <Steps direction="vertical">
            <Step title="Surat Diinputkan oleh:" description="Admin - Bidang Pengembangan Sistem dan Kelola"></Step>
            <Step title="Didistribusikan oleh:" description="Admin - Bidang Pengembangan Sistem dan Kelola" />
            <Step title="Surat Ditandai Selesai oleh:" description="Admin - Bidang Pengembangan Sistem dan Kelola" />
          </Steps>
            </Col>
          </Row>

          <Row >
            <Col span={4}>
            <Avatar shape="square" size={100} src='https://img2.pngio.com/acrobat-adobe-api-document-file-pdf-icon-pdf-documents-png-512_512.png' />
                        <p>Surat Undangan.pdf</p>
            </Col>
            <Col span={4}>
            <Avatar shape="square" size={100} src='https://cdn4.iconfinder.com/data/icons/flat-file-extension-2/40/doc-512.png' />
                        <p>Peraturan.doc</p>
            </Col>
          </Row>
        

          <Row>
            <Col span={4}>
              <DescriptionItem title="No.Surat" content={item.nomor_surat} ></DescriptionItem>
            </Col>
            <Col span={4}>
              <DescriptionItem title="Tgl.Surat" content={item.tanggal_terima} ></DescriptionItem>
            </Col>
            <Col span={4}>
              <DescriptionItem title="No.Agenda" content={item.nomor_surat}></DescriptionItem>
            </Col>
          </Row>
         
          
          <Divider />
          <p className="site-description-item-profile-p">Jenis Surat  & Klarifikasi Surat</p>
          <Row>
            <Col span={12}>
             <ul>
               <li><h5>{item.type_surat}</h5></li>
               <li><h5>{item.uraian_agenda}</h5></li>
             </ul>
            </Col>
          </Row>
          <p>Prioritas Surat</p>
          <Row>
            <Col span={12}>
               <h5>{item.sifat_surat}</h5>
               <p><i>*Surat ini akan ditandai selesai ketika dibuatkan balasan surat eksternal </i></p>
            </Col>
          </Row>

          <p>Lokasi Arsip Fisik</p>
          <Row>
            <Col span={12}>
               <h5>{item.lokasi_arsip}</h5>
            </Col>
          </Row>
          
          <p>Media Surat</p>
          <Row>
            <Col span={12}>
               <h5>{item.media_surat}</h5>
            </Col>
          </Row>
          
          <Row>
            <Col span={1}>
              <Avatar shape="square" size={25} src='https://image.flaticon.com/icons/svg/314/314300.svg' ></Avatar> &nbsp; &nbsp;
            </Col>
            <Col span={16}>
              <span><b>Masa aktif surat kurang 4 hari lagi</b></span><br />
              <p><b>Berakhir pada: 24 Feb 2020</b></p>
            </Col>
          </Row>

          <Row>
            <Col span={9}>
               <h5> <DownOutlined /> &nbsp; &nbsp; Korespondensi Surat</h5>
            </Col>
          </Row>
          <Row>
          <Col span={2}>
             <Avatar  src="https://as1.ftcdn.net/jpg/01/81/57/40/500_F_181574079_Uw2nQ5V8Hkq7jNvQdJcTcc8c1Es3aSnu.jpg" />
          </Col>
          <Col span={7}><p>(Tidak ada korespondensi)</p></Col>
          </Row>

          <Row>
            <Col span={6}>
              <p>Catatan Surat</p>
              <TextArea disabled={true} value="Tidak ada catatan surat"></TextArea>
            </Col>
          </Row>

         
        </Drawer>
          )}
        />
      </>
    );
  }
}

export default BankSuratView;

