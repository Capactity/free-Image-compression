import "./App.css";
import { message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const props = {
  name: "file",
  action: "http://localhost:3005/upload",
  onChange(info: any) {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (status === "error") {
      message.error(`${info.file.name} 文件上传失败`);
    }
  },
};

function App() {
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击或拖拽文件到这个区域来上传</p>
    </Dragger>
  );
}

export default App;
