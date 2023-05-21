import { UploadFiles } from "./ImageUpload";

interface Props {
  resizeFiles: UploadFiles[];
  setResizeFiles: React.Dispatch<React.SetStateAction<UploadFiles[]>>;
}

export default function ImagePreview({ resizeFiles, setResizeFiles }: Props) {
  return (
    <div>
      {resizeFiles.map((item, index) => (
        <div className="preview">
          <img src={item.url} alt={`업로드 이미지 ${index}번째 미리보기`} />
          <button
            onClick={() => {
              setResizeFiles(resizeFiles.filter((_, i) => i !== index));
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}
