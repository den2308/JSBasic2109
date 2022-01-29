import React from 'react'
import { Button, PageHeader, Carousel, Table, Tabs } from 'antd';
import { AntCloudOutlined } from '@ant-design/icons';
//import SecondComponent from './SecondComponent'
//import MyFirstContext from './myFirstContext'
import { getWeatherData } from './api'
const { TabPane } = Tabs;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'chinese',
    dataIndex: 'chinese',
  },
  {
    title: 'math',
    dataIndex: 'math',
  },
  {
    title: 'english',
    dataIndex: 'english',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const App = () => {
  const onChange = (a, b, c) => {
    console.log(a, b, c);
  }
  const handleGetWeatherData = async () => {
    const result = await getWeatherData()
    console.log('result', result)
  }
  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Some header"
        subTitle="sub title"
      />
      <Button onClick={handleGetWeatherData} type="primary" icon={<AntCloudOutlined />}>
        Get Weather Data
      </Button>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <Table columns={columns} dataSource={data} />
        </TabPane>
      </Tabs>

      {/* <SecondComponent />*/}
    </div>
  )
}

export default App
