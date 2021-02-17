import React, { memo } from 'react';
import { Typography, Row, Col, Avatar, Steps, Timeline,  Divider, Input } from 'antd';
import { ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
// import './PostDetailView.scss';

const { Title } = Typography;
const { TextArea } = Input;
const { Step } = Steps;
const DescriptionItem = ({ title, content }) => (
	<div className="site-description-item-profile-wrapper">
	  <p className="site-description-item-profile-p-label">{title}:</p>
	  {content}
	</div>
	
  );

type Props = {
	title?: string,
	body?: string,
	userId?: string,
	item?: String,
};

const AgendaSuratMasukDetailView = ({ title, judul_surat,nomor_surat, type_surat, tanggal_terima, media_surat,
	uraian_agenda, sifat_surat, lokasi_arsip, instansi, from, userId }: Props) => (
	<div>
		<Title level={2}>{title}</Title>
		<Row>
            <Col span={20}>
            <h2 className="site-description-item-profile-p" style={{ marginBottom: 5 }}>
              {judul_surat}
            </h2>
            <h4 className="site-description-item-profile-p" style={{ marginBottom: 5 }}>
             {instansi}
            </h4>
            <h5 className="site-description-item-profile-p" style={{ marginBottom: 10 }}>
              {from}
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
              <DescriptionItem title="No.Surat" content={nomor_surat} ></DescriptionItem>
            </Col>
            <Col span={4}>
              <DescriptionItem title="Tgl.Surat" content={tanggal_terima} ></DescriptionItem>
            </Col>
            <Col span={4}>
              <DescriptionItem title="No.Agenda" content={nomor_surat}></DescriptionItem>
            </Col>
          </Row>
         
          
          <Divider />
          <p className="site-description-item-profile-p">Jenis Surat  & Klarifikasi Surat</p>
          <Row>
            <Col span={12}>
             <ul>
               <li><h5>{type_surat}</h5></li>
               <li><h5>{uraian_agenda}</h5></li>
             </ul>
            </Col>
          </Row>
          <p>Prioritas Surat</p>
          <Row>
            <Col span={12}>
               <h5>{sifat_surat}</h5>
               <p><i>*Surat ini akan ditandai selesai ketika dibuatkan balasan surat eksternal </i></p>
            </Col>
          </Row>

          <p>Lokasi Arsip Fisik</p>
          <Row>
            <Col span={12}>
               <h5>{lokasi_arsip}</h5>
            </Col>
          </Row>
          
          <p>Media Surat</p>
          <Row>
            <Col span={12}>
               <h5>{media_surat}</h5>
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

	</div>
);

AgendaSuratMasukDetailView.defaultProps = {
	title: null,
	body: null,
	userId: null,
};

export default memo(AgendaSuratMasukDetailView);
