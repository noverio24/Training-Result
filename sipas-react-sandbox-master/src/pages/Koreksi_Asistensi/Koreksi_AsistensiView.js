import React, { memo } from 'react';
import { Page } from 'viewport';
import { withTranslation } from 'react-i18next';
import { Avatar,List, Row, Col, Badge } from 'antd';
import classnames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';
import './Koreksi_AsistensiView.scss';

type Props = {
    routes: Array<{}>,
    dataKoreksiAsistensi: Array,
};

const Koreksi_AsistensiView = ({routes, dataKoreksiAsistensi, t, ...props}: Props) => {
    const { url } = useRouteMatch();
    return(
        <Page name='koreksi_asistensi' plain={true}>
            <List 
            itemLayout="vertical"
            dataSource={dataKoreksiAsistensi}
            renderItem={item=>(
                <List.Item className={classnames('card_hover')}>
                    <Link to={url}>
                        <div>
                        <List.Item.Meta 
                            description={
                                <Row className={classnames('card_link')}>
                                    {item.status === "Belum Terbaca" ? 
                                             <Badge dot offset={[-40,5]}>
                                             <Col span={1}><Avatar size={55} src={t(item.icon)}/></Col>
                                             </Badge>
                                        :  
                                            <Badge >
                                            <Col span={1}><Avatar size={55} src={t(item.icon)}/></Col>
                                            </Badge>
                                        }
                                        &nbsp; &nbsp; &nbsp;
                                    <Col span={15} className={classnames('card_link_margin')}>
                                        <div>
                                        {item.status === "Belum Terbaca" ? 
                                            <span>
                                                <h5><b>
                                                    {item.keteranganSurat}< br />
                                                    {item.jenisSurat}
                                                </b></h5>  
                                            </span> :
                                            <span>
                                                {item.keteranganSurat} <br />
                                                {item.jenisSurat}
                                            </span>
                                        }
                                            <h4>{item.subject}</h4>
                                            <h5>{item.from}</h5>
                                            <h6>{item.nomorSurat}</h6>
                                        </div>
                                        <Row>
                                            {item.jenisSurat === "Disposisi" &&
                                                <Col span={4}><Avatar size={45} src={t(item.profileDisposisi)}/></Col>
                                            }
                                            <Col span={15} className={classnames('card_link_margin')}>
                                                <div>
                                                    <span>
                                                        <h5>{item.fromDisposisi}</h5>
                                                    </span>
                                                    <Row>
                                                        {item.jenisSurat === "Disposisi" &&
                                                             <Col span={2}><Avatar size={20} src={t(item.iconDisposisi)}/></Col>
                                                        }  
                                                        <Col className={classnames('card_link_margin')}>
                                                            <h5>{item.isiDisposisi}</h5>
                                                        </Col>
                                                            <h6>{item.ketDisposisi}</h6>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                        <Col span={4}>{item.tanggalMasuk}</Col>
                                </Row>
                            }
                        />
                        </div>
                    </Link>
                </List.Item>
            )}
            />
        </Page>
    );
};

export default withTranslation()(memo(Koreksi_AsistensiView));