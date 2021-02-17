import React, { useState } from 'react';
import { Button, Modal, Form, Input, InputNumber, Checkbox, Select, PageHeader, Tabs } from 'antd';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Klasifikasi Surat"
      okText="Simpan"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="horizontal"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="Nama Klasifikasi"
          label="Nama Klasifikasi"
          rules={[
            {
              required: true,
              message: 'Field ini wajib diisi!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="kode klasifikasi"
          label="Kode Klasifikasi"
          rules={[
            {
              required: true,
              message: 'Field ini wajib diisi!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label=" Anak Dari">
          <Select allowClear>
           
          </Select>
         </Form.Item>

         <Form.Item label="Lama masa aktif">
           <Form.Item name="lama masa aktif" noStyle>
             <InputNumber min={1} max={10} />
           </Form.Item>
                    <span className="ant-form-text"> hari</span>
        </Form.Item>


        <Form.Item name="checkbox-group" label="Status Aktif">
          <br></br>
            <Checkbox value="Status Aktif" style={{ lineHeight: '32px' }}>
             Status Aktif
            </Checkbox>
        </Form.Item>    
      
      </Form>
    </Modal>
  );
};

const { TabPane } = Tabs;

const KlasifikasiView = () => {
  const [visible, setVisible] = useState(false);
  const onCreate = values => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <PageHeader title={('Daftar Klasifikasi Surat')} >
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Tambah
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
			<Tabs defaultActiveKey="1">
				<TabPane tab="MUAT ULANG" key="1">
				</TabPane>
	  		</Tabs>
			  {/* <Table columns={columns} dataSource={data} onChange={onChange} /> */}
		</PageHeader>
     

    </div>
  );
};

export default KlasifikasiView;
