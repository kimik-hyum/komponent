import * as React from "react";
import uuid from "react-uuid";
import style from "./ImageUpload.module.scss";
import Resizer from "react-image-file-resizer";

export interface ImageUploadProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export interface UploadFiles {
  id: string;
  file: File;
  url?: string;
}

const getDataTransfer = (files: FileList | DataTransferItemList | null) => {
  const dataTransfer = new DataTransfer();
  if (files instanceof FileList) {
    Array.from(files).map((item) => {
      dataTransfer.items.add(item);
    });
  } else if (files) {
    Array.from(files).map((item) => {
      const file = item.getAsFile();
      if (file) dataTransfer.items.add(file);
    });
  }
  return dataTransfer;
};

const filterImage = (files: DataTransfer) => {
  const filter = Array.from(files.files).filter((item) => {
    return item.type.match("image.*");
  });
  const diffNum = files.files.length - filter.length;
  !!diffNum &&
    alert(`이미지가 아닌 파일 ${diffNum}개를 제외하고 업로드 되었습니다.`);
  return filter;
};

const setImageFiles = (files: File[]): UploadFiles[] => {
  return files.map((file) => {
    return {
      id: uuid(),
      file: file,
    };
  });
};

interface ResizeFilesType {
  files: UploadFiles[];
  resizewidth?: number;
  resizeheight?: number;
}

const handleResizing = async ({
  files,
  resizeheight,
  resizewidth,
}: ResizeFilesType) => {
  const ResizeFileAsyncs = files.map((item) => {
    return {
      id: item.id,
      resize: new Promise(
        (
          resolve: (
            value: string | File | Blob | ProgressEvent<FileReader>
          ) => void
        ) => {
          Resizer.imageFileResizer(
            item.file, //resize file
            resizewidth || 1920, //max width
            resizeheight || 2000, // max height
            item.file.type.replace("image/", ""), // format
            80, // quality
            0, //rotation
            (uri) => {
              resolve(uri);
            },
            "file" //outputType
            // min width
            // min height
          );
        }
      ),
    };
  });
  const resizeFiles = await Promise.all(
    ResizeFileAsyncs.map((item) => {
      return item.resize.then((value) => {
        const file = value as File;
        return {
          id: item.id,
          file: file,
          url: URL.createObjectURL(file),
        };
      });
    })
  );
  return resizeFiles;
};

export const ImageUpload = React.forwardRef<HTMLInputElement, ImageUploadProps>(
  ({ id, multiple, ...props }, ref) => {
    const [uploadFiles, setUploadFiles] = React.useState<UploadFiles[]>();
    const [resizeFiles, setResizeFiles] = React.useState<UploadFiles[]>([]);
    React.useEffect(() => {
      if (!!uploadFiles?.length) {
        handleResizing({
          files: uploadFiles,
          resizewidth: 100,
          resizeheight: 100,
        }).then((files) => {
          setResizeFiles(resizeFiles?.concat(files));
        });
      }
    }, [uploadFiles]);

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {};
    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {};

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
      setUploadFiles(
        setImageFiles(filterImage(getDataTransfer(e.dataTransfer.files)))
      );
    };
    const onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      setUploadFiles(
        setImageFiles(filterImage(getDataTransfer(e.clipboardData.items)))
      );
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUploadFiles(
        setImageFiles(filterImage(getDataTransfer(e.target.files)))
      );
    };
    console.log(uploadFiles, resizeFiles);

    return (
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={style.upload}
      >
        <input type="text" onPaste={onPaste} readOnly />
        <input type="file" onChange={onChange} {...{ id, multiple, ref }} />
        <label htmlFor={id}>업로드</label>
      </div>
    );
  }
);
