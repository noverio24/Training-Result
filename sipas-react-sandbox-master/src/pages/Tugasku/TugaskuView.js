import React, { memo, Suspense } from 'react';
import { Page, Curtain, NotFound} from 'viewport';
import { Menu, Avatar, Row, Col, Divider, Layout } from 'antd';
import { withTranslation } from 'react-i18next';
import classnames from 'classnames';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import './TugaskuView.scss';

type Props = {
    dataTugas: Array,
    routes: Array<{}>,
};

const TugaskuView = ({routes, dataTugas, t, ...props}: Props) => {
    let { path } = useRouteMatch();
	const { url } = useRouteMatch();
    return(
        <Page name='tugasku' plain={true}>
            <Menu mode='inline'>
                {dataTugas.map( m => (
                    <div key={m.route}>
                        <Link to={url + m.route}>
								{t(m.title)}
                        <div className={classnames('left-layout')}>
                            <Row>
                                <Col span={5} className={classnames('left-layout-icon')}>
                                    <Avatar size={55} src={t(m.icon)}/>
                                    <h5 className={classnames('left-layout-icon-text')}>{t(m.namaIcon)}</h5>
                                </Col>
                                <Col span={15}>
                                    <Row className={classnames('left-layout-text')}>
                                       <label>{t(m.jenis)}</label>
                                       &nbsp; &nbsp; 
                                       <label>{t(m.perihal)}</label>
                                    </Row>
                                    <Row className={classnames('left-layout-text')}>
                                        <h4>{t(m.judulTugas)}</h4>
                                    </Row>
                                    <Row className={classnames('left-layout-text')}>
                                        <h5>{t(m.nama)}</h5>
                                    </Row>
                                    <Row className={classnames('left-layout-text')}>
                                        <h5>{t(m.nomor)}</h5>
                                    </Row>
                                </Col>
                                <Col span={4.5}>
                                    <Row className={classnames('left-layout-text')}>
                                    <h4>{t(m.waktu)}</h4>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        </Link>
                        <Divider />
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
						<Route path='*' component={NotFound} />
					</Switch>
				</Suspense>
            </Layout.Content>
        </Page>
    );
};

TugaskuView.defaultProps = {
	routes: [],
	dataTugas: [],
};

export default withTranslation()(memo(TugaskuView));