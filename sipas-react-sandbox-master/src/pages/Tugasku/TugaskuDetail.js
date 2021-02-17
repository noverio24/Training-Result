import React, { memo } from 'react';
import { Card, Row, Col, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Page } from 'viewport';
import { withTranslation } from 'react-i18next';
import classnames from 'classnames';
import './tugaskuDetailView.scss';

type Props = {
    name?: string,
    dataTugas: Array
};

const tugaskuDetail = ({ routes, dataTugas, t, ...props }: Props) => {
    
    return(
        <Page name='tugaskuDetailView' plain={true}>
            <Row className={classnames('card_text')}>
                <Col span={21}>
                    <h4>Undangan Upacara Bendera Memperingati Hari Jadi Kota Malang</h4>
                    <h4>PT Indonesia Jaya Merdeka</h4>
                    <p>Direktur Utama SIPAS</p>
                </Col>
                <Col span={2}>
                <Avatar shape="square" size={50} src='https://www.jobsoid.com/wp-content/uploads/2020/04/Job-Offer-Letter.svg' />
                </Col>
            </Row>
           
            <Card className={classnames('card')}>
                <Row className={classnames('card_text')}>
                    <Col span={9}>
                        <Avatar shape="square" size={100} src='https://img2.pngio.com/acrobat-adobe-api-document-file-pdf-icon-pdf-documents-png-512_512.png' />
                        <p>Surat Undangan.pdf</p>
                    </Col>
                    <Col span={7}>
                        <Avatar shape="square" size={100} src='https://cdn4.iconfinder.com/data/icons/flat-file-extension-2/40/doc-512.png' />
                        <p>Peraturan.doc</p>
                    </Col>
                    <Col span={7}>
                        <p>Surat ini disertai berkas fisik</p>
                        <Button type="primary">MINTA BERKAS</Button>
                    </Col>
                </Row>
            </Card>

            <Card className={classnames('card')}>
                <Row className={classnames('card_text')}>
                    <Col span={9}>
                        <p>Nomor Surat</p>
                        <p># 055/DKA/06/2019</p>
                    </Col>
                    <Col span={7}>
                        <p>Tanggal Surat</p>
                        <p>12 April 2019</p>
                    </Col>
                    <Col span={7}>
                        <p>Nomor Agenda</p>
                       <p>9</p>
                    </Col>
                </Row>
            </Card>

            <Card className={classnames('card')}>
                <Row className={classnames('card_text')}>
                    <Col span={9}>
                        <p>Jenis Surat</p>
                        <p>Klasifikasi Surat</p>
                        <Link>Tampilkan Detail </Link>
                    </Col>
                    <Col span={7}>
                       <h4>Surat Penawaran</h4>
                       <h4>Penawaran Aplikasi</h4>
                    </Col>
                </Row>
            </Card>

            <Card className={classnames('card')}>
                <Row className={classnames('card_text')}>
                    <Col span={15}>
                        <p>Surat ini telah terdistribusi ke</p>
                    </Col>
                    <Col span={7}>
                    <Avatar size={50} src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                    <Avatar size={50} src="https://i0.wp.com/www.sfnwseries.com/wp-content/uploads/2017/11/team-1-4-person-circle-p2-200-1.png?ssl=1" />
                    </Col>
                </Row>
            </Card>

            <Card className={classnames('card')}>
                <Row className={classnames('card_text')}>
                    <Col span={15}>
                        <h4>Urutan Disposisi</h4>
                    </Col>
                </Row>

                <Card className={classnames('card')}>
                <Row className={classnames('card_text')}>
                    <Col span={5}>
                        <Avatar size={50} src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                    </Col>
                    <Col span={19}>
                        <h4>Adi Wirtawan. S.E,</h4>
                        <h5 >Direktur Utama</h5>
                        <hr></hr>
                        <h5>Mohon didiskusikan kembali dengan bagian pengadilan, untuk segera dilaksanakan
                            ditempat.
                        </h5>
                        <h6>Diteruskan 06 April 2019 15.30</h6>
                    </Col>
                </Row>
                </Card>

                <Card className={classnames('card')}>
                <Row className={classnames('card_text')}>
                    <Col span={5}>
                        <Avatar size={50} src="https://i0.wp.com/www.sfnwseries.com/wp-content/uploads/2017/11/team-1-4-person-circle-p2-200-1.png?ssl=1" />
                    </Col>
                    <Col span={19}>
                        <h4>Arina Ginting. S.E,</h4>
                        <h5 >Kadiv Pengadilan</h5>
                        <hr></hr>
                        <h5>Mohon didiskusikan kembali dengan bagian pengadilan, untuk segera dilaksanakan
                            ditempat.
                        </h5>
                        <h6>Diteruskan 06 April 2019 15.30</h6>
                    </Col>
                </Row>
                </Card>


            </Card>
        </Page>
                
    );
};

tugaskuDetail.defaultProps = {
	routes: [],
	dataTugas: [],
};


export default withTranslation()(memo(tugaskuDetail));