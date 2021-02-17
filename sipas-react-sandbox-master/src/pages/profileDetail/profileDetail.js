
import React, { memo } from 'react';
import { Card, Row, Col} from 'antd';
import { Link } from 'react-router-dom';
import { Page } from 'viewport';
import classnames from 'classnames';
import './profileDetailView.scss';

type Props = {
    name?: string,
};

const profileDetail= ({ name }: Props) => {
    return(
        <Page name='profileDetailView' plain={true}>
            <Card className={classnames('card')}>
                <h3>Biodata Diri</h3>
                <Row className={classnames('card_text')}>
                    <Col span={5}>Nama</Col>
                    <Col span={19}>Angel Susanti</Col>
                </Row>
                <Row className={classnames('card_text')}>
                    <Col span={5}>Unit</Col>
                    <Col span={19}>Administrator Aplikasi - Bidang Pengembangan Sistem dan Tata Kelola</Col>
                </Row>
                <h3>Kontak</h3>
                <Row className={classnames('card_text')}>
                    <Col span={5}>Email</Col>
                    <Col span={7}>sipas.sekawanmedia@gmail.com</Col>
                    <Col span={3}><Link>Ubah</Link></Col>
                </Row>
                <Row className={classnames('card_text')}>
                    <Col span={5}>Nomor Hp</Col>
                    <Col span={3}>081**********</Col>
                    <Col span={3}><Link>Ubah</Link></Col>
                </Row>
                <h3>Akun</h3>
                <Row className={classnames('card_text')}>
                    <Col span={5}>Nama Pengguna</Col>
                    <Col span={2}>burhannn</Col>
                    <Col span={3}><Link>Ubah</Link></Col>
                </Row>
                <Row className={classnames('card_text')}>
                    <Col span={5}>Kata Sandi</Col>
                    <Col span={2}>***********</Col>
                    <Col span={3}><Link>Ubah</Link></Col>
                </Row>
            </Card>
        </Page>
    );
};

export default memo(profileDetail);