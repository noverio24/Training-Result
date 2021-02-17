import React, { useState } from 'react';
import { Button, Modal, Form, Input, InputNumber, Checkbox, Select, PageHeader, Tabs, Table} from 'antd';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  return (
    <Modal
      visible={visible}
      title="Jenis Surat"
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
          name="jenis surat"
          label="Jenis Surat"
          rules={[
            {
              required: true,
              message: 'Field ini wajib diisi!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="kode surat"
          label="Kode Surat"
          rules={[
            {
              required: true,
              message: 'Field ini wajib diisi!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Lama masa aktif">
           <Form.Item name="lama masa aktif" noStyle>
             <InputNumber min={1} max={10} />
           </Form.Item>
                    <span className="ant-form-text"> hari</span>
        </Form.Item>

        <Form.Item name="checkbox-group" label="Opsi Tampil">
          <br></br>
            <Checkbox value="Tampil di Surat Masuk" style={{ lineHeight: '32px' }}>
             Tampil di Surat Masuk
            </Checkbox>
            <br></br>
            <Checkbox value="Tampil di Surat Keluar" style={{ lineHeight: '32px' }}>
             Tampil di Surat Keluar
            </Checkbox>
            <br></br>
            <Checkbox value="Tampil di Surat Internal" style={{ lineHeight: '32px' }}>
             Tampil di Surat Internal
            </Checkbox>
        </Form.Item>

        <Form.Item name="checkbox-group" label="Penomoran Khusus">
          <br></br>
            <Checkbox value="Tahun Surat" style={{ lineHeight: '32px' }}>
             Tahun Surat
            </Checkbox>
            <br></br>
            <Checkbox value="Model Surat" style={{ lineHeight: '32px' }}>
             Model Surat
            </Checkbox>
            <br></br>
            <Checkbox value="Unit Pembuat" style={{ lineHeight: '32px' }}>
             Unit Pembuat
            </Checkbox>
            <br></br>
            <Checkbox value="Unit Penyetuju" style={{ lineHeight: '32px' }}>
             Unit Penyetuju
            </Checkbox>
            <br></br>
            <Checkbox value="Jabatan Pembuat" style={{ lineHeight: '32px' }}>
             Jabatan Pembuat
            </Checkbox>
            <br></br>
            <Checkbox value="Jabatan Pembuat" style={{ lineHeight: '32px' }}>
             Jabatan Pembuat
            </Checkbox>
        </Form.Item>

        <Form.Item name="checkbox-group" label="Format Penomoran">
          <br></br>
          <h3>Eksternal</h3>
          <Form.Item label=" Digit Penomoran {#}">
          <Select allowClear>
            <Option value="1">1 digit</Option>
            <Option value="2">2 digit</Option>
            <Option value="3">3 digit</Option>
            <Option value="1">4 digit</Option>
            <Option value="2">5 digit</Option>
            <Option value="3">6 digit</Option>
            <Option value="1">7 digit</Option>
          </Select>
         </Form.Item>
           
         <Form.Item
          name="format"
          label="Format"
          width={10}
          rules={[
            {
              required: false,
              message: '',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="format backdate"
          label="Format Bakcdate"
          width={10}
          rules={[
            {
              required: false,
              message: '',
            },
          ]}
        >
          <Input />
        </Form.Item>
        </Form.Item>

        <Form.Item name="checkbox-group" label="Penomoran Awal">
          <br></br>
            <Checkbox value="Gunakan Penomoran Awal" style={{ lineHeight: '32px' }}>
             Gunakan Penomoran Awal
            </Checkbox>
        </Form.Item>

        <Form.Item name="checkbox-group" label="Akses">
          <br></br>
            <Checkbox value="Batasi akses hanya untuk unit tertentu" style={{ lineHeight: '32px' }}>
            Batasi akses hanya untuk unit tertentu
            </Checkbox>
            <p>Jika diaktifkan maka jenis hanya akan tampil pada unit yang terpilih saja</p>
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
const data = ({data}) => {};
const onChange = ({onChange}) => {};
const columns = ({colums}) => {};

const JenisView = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <PageHeader title={('Jenis Surat')} >
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

export default JenisView;
