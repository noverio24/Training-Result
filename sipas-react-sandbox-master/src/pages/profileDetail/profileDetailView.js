import React, { memo, Suspense } from 'react';
import { Page, Curtain, NotFound} from 'viewport';
import { Menu, Avatar, Row, Col, Divider, Layout, Card } from 'antd';
import { withTranslation } from 'react-i18next';
import classnames from 'classnames';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import './profileDetailView.scss';

type Props = {
    dataProfile: Array,
    routes: Array<{}>,
};

const profileDetailView = ({routes, dataProfile, t, ...props}: Props) => {
    // let { path } = useRouteMatch();
	// const { url } = useRouteMatch();
    return(
        <Page name='profileDetail' plain={true}>
              <Card className={classnames('card')}>
                <h3>Biodata Diri</h3>
                {dataProfile.map( m => (
                    <div key={m.route}>
                        {/* <Link to={url + m.route}>
								{t(m.title)} */}
                                <Row className={classnames('card_text')}>
                                    <Col span={5}>Nama</Col>
                                    <Col span={19}>{m.nama}</Col>
                                </Row>
                                <Row className={classnames('card_text')}>
                                    <Col span={5}>Unit</Col>
                                    <Col span={19}>{m.unit}</Col>
                                </Row>
                                <h3>Kontak</h3>
                                <Row className={classnames('card_text')}>
                                    <Col span={5}>Email</Col>
                                    <Col span={7}>{m.email}</Col>
                                    <Col span={3}><Link>Ubah</Link></Col>
                                </Row>
                                <Row className={classnames('card_text')}>
                                    <Col span={5}>Nomor Hp</Col>
                                    <Col span={3}>{m.noHP}</Col>
                                    <Col span={3}><Link>Ubah</Link></Col>
                                </Row>
                                <h3>Akun</h3>
                                <Row className={classnames('card_text')}>
                                    <Col span={5}>Nama Pengguna</Col>
                                    <Col span={2}>{m.namaPengguna}</Col>
                                    <Col span={3}><Link>Ubah</Link></Col>
                                </Row>
                                <Row className={classnames('card_text')}>
                                    <Col span={5}>Kata Sandi</Col>
                                    <Col span={2}>{m.password}</Col>
                                    <Col span={3}><Link>Ubah</Link></Col>
                                </Row>
                        {/* </Link> */}
                      
                    </div>
                ))}
         
         </Card>
        </Page>
    );
};

profileDetailView.defaultProps = {
	routes: [],
	dataProfile: [],
};

export default withTranslation()(memo(profileDetailView));




// import React, { memo } from 'react';
// import { Card, Row, Col } from 'antd';
// import { Link } from 'react-router-dom';
// import { Page } from 'viewport';
// import classnames from 'classnames';
// import './profileDetailViewView.scss';

// type Props = {
//     name?: string,
// };

// const profileDetailView = ({ name }: Props) => {
//     return(
//         <Page name='profileDetailViewView' plain={true}>
//             <Card className={classnames('card')}>
//                 <h3>Biodata Diri</h3>
//                 <Row className={classnames('card_text')}>
//                     <Col span={5}>Nama</Col>
//                     <Col span={19}>Angel Susanti</Col>
//                 </Row>
//                 <Row className={classnames('card_text')}>
//                     <Col span={5}>Unit</Col>
//                     <Col span={19}>Administrator Aplikasi - Bidang Pengembangan Sistem dan Tata Kelola</Col>
//                 </Row>
//                 <h3>Kontak</h3>
//                 <Row className={classnames('card_text')}>
//                     <Col span={5}>Email</Col>
//                     <Col span={7}>sipas.sekawanmedia@gmail.com</Col>
//                     <Col span={3}><Link>Ubah</Link></Col>
//                 </Row>
//                 <Row className={classnames('card_text')}>
//                     <Col span={5}>Nomor Hp</Col>
//                     <Col span={3}>081**********</Col>
//                     <Col span={3}><Link>Ubah</Link></Col>
//                 </Row>
//                 <h3>Akun</h3>
//                 <Row className={classnames('card_text')}>
//                     <Col span={5}>Nama Pengguna</Col>
//                     <Col span={2}>burhannn</Col>
//                     <Col span={3}><Link>Ubah</Link></Col>
//                 </Row>
//                 <Row className={classnames('card_text')}>
//                     <Col span={5}>Kata Sandi</Col>
//                     <Col span={2}>***********</Col>
//                     <Col span={3}><Link>Ubah</Link></Col>
//                 </Row>
//             </Card>
//         </Page>
//     );
// };

// export default memo(profileDetailView);