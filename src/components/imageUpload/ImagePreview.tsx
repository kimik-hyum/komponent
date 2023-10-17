import { UploadFiles } from "./ImageUpload";
import style from "./ImageUpload.module.scss";

interface Props {
  resizeFiles: UploadFiles[];
  setResizeFiles: React.Dispatch<React.SetStateAction<UploadFiles[]>>;
}

export default function ImagePreview({ resizeFiles, setResizeFiles }: Props) {
  return (
    <div className={style.preview}>
      {resizeFiles.map((item, index) => (
        <div data-name="preview-img">
          <div data-name="img">
            <img src={item.url} alt={`업로드 이미지 ${index}번째 미리보기`} />
          </div>
          <button
            onClick={() => {
              setResizeFiles(resizeFiles.filter((_, i) => i !== index));
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
