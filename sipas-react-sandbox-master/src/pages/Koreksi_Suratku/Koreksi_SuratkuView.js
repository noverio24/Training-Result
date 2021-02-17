import React, { memo } from 'react';
import { Page } from 'viewport';
import { withTranslation } from 'react-i18next';
import { Avatar,List, Row, Col, Badge, Card } from 'antd';
import classnames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';
import './Koreksi_SuratkuView.scss';

type Props = {
    routes: Array<{}>,
    dataKoreksi: Array,
};

const Koreksi_SuratkuView = ({routes, dataKoreksi, t, ...props}: Props) => {
    const { url } = useRouteMatch();
    return(
        <Page name='koreksi_suratku' plain={true}>
            <List 
            itemLayout="vertical"
            dataSource={dataKoreksi}
            renderItem={item=>(
                <List.Item className={classnames('card_hover')}>
                    <Link to={url}>
                        <div>
                        <List.Item.Meta 
                            description={
                                <Row className={classnames('card_link')}>
                                    {item.status === "Belum Terbaca" ? 
                                             <Badge dot offset={[-40,5]}>
                                             <Col span={1}><Avatar size={50} src={t(item.icon)}/></Col>
                                             <h5>{item.tipe}</h5>
                                             </Badge>
                                             
                                        :  
                                            <Badge >
                                            <Col span={1}><Avatar size={50} src={t(item.icon)}/></Col>
                                            {item.tipe}
                                            </Badge>
                                        }
                                        &nbsp; &nbsp; &nbsp;
                                       
                                    <Col span={14} className={classnames('card_link_margin')}>
                                        <div>
                                        {item.status === "Belum Terbaca" ? 
                                            <span>
                                                <h5><b>
                                                    {item.jenisSurat} &nbsp; &nbsp; &nbsp;{item.keteranganSurat}< br />
                                                </b></h5>  
                                                <h4>{item.subject}</h4>
                                                <h5>{item.from}</h5>
                                                <h6>{item.nomorSurat}</h6>
                                            </span> 
                                                  
                                            :
                                            <span>
                                                 {item.jenisSurat} &nbsp; &nbsp; &nbsp;{item.keteranganSurat}< br />
                                                 {item.subject}<br/>
                                                 {item.from}<br />
                                                 {item.nomorSurat}
                                            </span>
                                        }
                                           
                                        </div>
                                        <Row>
                                            {item.tipe === "Disposisi" &&
                                                <Col span={4}><Avatar size={45} src={t(item.profileDisposisi)}/></Col>
                                            }
                                            <Col span={15} className={classnames('card_link_margin')}>
                                                <div>
                                                    {item.status === "Belum Terbaca" ?
                                                        <span>
                                                            <h5>{item.fromDisposisi}</h5>
                                                        </span>
                                                    :
                                                        <span>
                                                            {item.fromDisposisi}
                                                        </span>
                                                    }
                                                   
                                                    <Row>
                                                        {item.tipe === "Disposisi" &&
                                                             <Col span={2}><Avatar size={20} src={t(item.iconDisposisi)}/></Col>
                                                        }  
                                                        {item.status === "Belum Terbaca" ?
                                                                 <Col className={classnames('card_link_margin')}>
                                                                    <h5>{item.isiDisposisi}</h5>
                                                                </Col>
                                                        :
                                                                 <Col span={24} className={classnames('card_link_margin')}>
                                                                     {item.isiDisposisi}
                                                                 </Col>
                                                        }
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

export default withTranslation()(memo(Koreksi_SuratkuView));