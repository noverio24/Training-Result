import React, { memo, Suspense } from 'react';
import { Page, Curtain, NotFound} from 'viewport';
import { Menu, Avatar, Row, Col, Input, Layout, PageHeader, Card, Badge } from 'antd';
import { withTranslation } from 'react-i18next';
import classnames from 'classnames';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import './AgendaSuratKeluarView.scss';

type Props = {
    dataAgendaSuratKeluar: Array,
    routes: Array<{}>,
};

const AgendaSuratKeluarView = ({routes, dataAgendaSuratKeluar, t, ...props}: Props) => {
    let { path } = useRouteMatch();
	const { url } = useRouteMatch();
    return(
        <Page name='AgendaSuratKeluar' plain={true}>
            
            <Card>
                    <Row>
                        <Col span={20}>
                        <Input.Search
							allowClear
							placeholder='Keluarkan kata kunci..'
							// onSearch={handleQuery}
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
                        <Col span={4}>
                            <th>Tembusan</th>
                        </Col>
                        <Col span={3}>
                            <th>Berkas</th>
                        </Col>
                        <Col span={2}>
                            <th>Tgl.Terima</th>
                        </Col>
                    </Row>
                </div>
            </Card>
            <Menu mode='inline'>
                {dataAgendaSuratKeluar.map( m => (
                    <div key={m.route}>
                        <Link to={url + m.route}>
							{t(m.title)}
                             <PageHeader />
                                <Card className={classnames('card_hover')}>
                                    <Row  className={classnames('card_link')}>
                                        <Col span={3} >
                                            <span><h4>{m.tipe_surat}</h4></span>
                                            <span><h5>{m.jenis}</h5></span>
                                        </Col>
                                        {m.status === "Belum Terbaca" ? 
                                             <Badge dot offset={[-40,5]}>
                                             <Col span={2}><Avatar size={55} src={t(m.icon)}/></Col>
                                             </Badge>
                                             
                                        :  
                                            <Badge >
                                            <Col span={2}><Avatar size={55} src={t(m.icon)}/></Col>
                                            </Badge>
                                        }
                                        &nbsp; &nbsp; &nbsp;
                                        <Col span={5}>
                                            
                                            <span><h4>{m.surat}</h4></span>
                                            <span><h5>Dari : {m.dari}</h5></span>
                                            <span><h6>Nomor : {m.nomor}</h6></span>
                                        </Col>
                                        <Avatar shape="square" size={20} src={t(m.icon_status)}/> &nbsp; &nbsp;
                                        <Col span={3}>
                                            {m.status === "Belum Terbaca" ? <span><h5><b>{m.status}</b></h5></span> : <span><h5>{m.status}</h5></span>}
                                        </Col>
                                        <Col span={3}>
                                            <h5>{m.tembusan}</h5>
                                        </Col>
                                        <Col span={3}>
                                            <h5>{m.berkas}</h5>
                                        </Col>
                                        <Col span={3}>
                                            <center><h5>{m.tgl_terima}</h5></center>
                                        </Col>
                                    </Row>
                            </Card>
                        </Link>
                    </div>
                ))}
            </Menu>
            <Layout.Content className={classnames('content')}>
            <Suspense fallback = {<Curtain />}>
					<Switch>
						{routes.map(route => (
							<Route 
								key={route.path}
								exact={route.exact}
								path={path + route.path}
								component={route.component}
							/>
						))}
					</Switch>
				</Suspense>
            </Layout.Content>
        </Page>
    );
};

AgendaSuratKeluarView.defaultProps = {
	routes: [],
	dataAgendaSuratKeluar: [],
};

export default withTranslation()(memo(AgendaSuratKeluarView));