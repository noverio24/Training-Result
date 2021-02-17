import React, { memo } from 'react';
import { Card, Row, Col, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Page } from 'viewport';
import classnames from 'classnames';
import {
    EditOutlined,
    PlusOutlined
} from '@ant-design/icons';
import './asistenDetail.scss';

type Props = {
    name?: string,
};

const asistenDetail = ({ name }: Props) => {
    return(
        <Page name='asistenDetail' plain={true}>
            <Card className={classnames('card')}>
                <Row>
                    <Col span={15}>
                    <h2>Asisten</h2>
                    </Col>
                    <Col span={9}>
                    <Button
                        type="primary"
                    >
                        <PlusOutlined />
                        TAMBAH ASISTEN BARU
                    </Button>
                    </Col>
                </Row>
              
                <Row className={classnames('card_text')}>
                    <Col span={10}>Daftar Pegawai</Col>
                    <Col span={5}>PLT</Col>
                    <Col span={4}>Tgl. Mulai</Col>
                    <Col span={4}>Tgl. Selesai</Col>
                </Row>
                <hr></hr>
                <Row className={classnames('card_text')}>
                    <Col span={2}>
                        <EditOutlined />
                            <Link>Edit</Link>
                    </Col>
                    <Col span={2}> 
                        <Avatar size={50} src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                    </Col>
                    <Col span={6}>
                        <h3>Kukuh Tri Winarno</h3>
                        <p>Unit Kesetariat DISPENDUK Jember</p>
                        <p>Kadiv HUMAS</p>
                    </Col>
                    <Col span={5}>-</Col>
                    <Col span={4}>-</Col>
                    <Col span={4}>-</Col>
                </Row>
                <Row className={classnames('card_text')}>
                    <Col span={2}>
                        <EditOutlined />
                            <Link>Edit</Link>
                    </Col>
                    <Col span={2}> 
                        <Avatar size={50} src="https://i0.wp.com/www.sfnwseries.com/wp-content/uploads/2017/11/team-1-4-person-circle-p2-200-1.png?ssl=1" />
                    </Col>
                    <Col span={6}>
                        <h3>Ningrum Tirami</h3>
                        <p>Unit Kesetariat DISPENDUK Jember</p>
                        <p>Sub Kadiv HUMAS</p>
                    </Col>
                    <Col span={5}>-</Col>
                    <Col span={4}>-</Col>
                    <Col span={4}>-</Col>
                </Row>
            </Card>
        </Page>
    );
};

export default memo(asistenDetail);