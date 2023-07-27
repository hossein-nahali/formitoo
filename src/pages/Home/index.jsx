import './assets/css/home.scss'
import {GeneralStatus} from "./Components";
import {Col, Row} from "react-bootstrap";
import {Box} from "../../GlobalComponents/Box";
import {Table} from "../../GlobalComponents/Table";
import {Test} from "../../config/fakeData/Test.js";
import {User} from "../../config/fakeData/User.js";
import {TitleExam} from "../../config/fakeData/TitleExam.js";
import {SocialMedia} from "../../GlobalComponents/SocialMedia";
import {Title} from "../../GlobalComponents/Title";
import {Language} from "../../config/Language.js";

export const Home = () => {
    const {good_morning, name, personality_test} = Language.fa

    return (
        <div>
            <Title title={`${good_morning} ${name}`} presonal={27}  test={personality_test} is_show_desc={true}/>
            <GeneralStatus/>
            <Row className={'mb-4 mb-lg-0'}>
                <Col lg={9} className={'mb-5 mb-lg-4'}>
                    <Box title={'لیست آزمون ها'} readMore={{text: 'مشاهده بیشتر', path: '/home'}}>
                        <Table headerTable={Test.header} contentTable={Test.body}/>
                    </Box>
                </Col>
                <Col lg={3} className={'mb-5 mb-lg-4'}>
                    <Box title={'لیست آزمون ها'}>
                        <Table headerTable={User.header} contentTable={User.body} customize={User.customize}/>
                    </Box>
                </Col>
            </Row>
            <Row>
                <Col lg={9} className={'mb-5 mb-lg-4'}>
                    <Box title={'لیست شرکت کنندگان'} readMore={{text: 'مشاهده بیشتر', path: '/home'}}>
                        <Table headerTable={TitleExam.header} contentTable={TitleExam.body}/>
                    </Box>
                </Col>
                <Col lg={3} className={'mb-5 mb-lg-4'}>
                    <Box className={'p-0'} title={'ارتباط با ما'} style={{background: 'inherit'}} bg={true}>
                        <SocialMedia telegram_id={'nahali_dev'} instagram_id={'#'} whatsapp={'#'}/>
                    </Box>
                </Col>
            </Row>
        </div>
    )
}