'use client';

import { Button, Card, Image, Spinner } from '@nextui-org/react';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { RiFolderUploadLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { NumberFormatterHelper } from '../helper/number-format-helper.ts';
import ErrorService from '../services/error.service.ts';

export default function UploadBox(props: IProps) {
  const numberFormatHelper = new NumberFormatterHelper();
  const inputRef: any = useRef();
  const errorService = new ErrorService();

  const [loadingUpload, setLoadingUpload] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>(undefined);
  const uploadProcess = async (files: File) => {
    setLoadingUpload(true);
    try {
      if (files) {
        const formData: FormData = new FormData();
        formData.append('file', files);

        await axios
          .post('https://api.prisa.id/api' + '/public/upload/v1', formData, {})
          .then((res: AxiosResponse) => {
            setLoadingUpload(false);
            if (props.onChange) {
              props.onChange(res?.data?.message);
              setFile(files);
            }
          })
          .catch((e) => {
            errorService.fetchApiError(e);
            setLoadingUpload(false);
          });
      } else {
        setLoadingUpload(false);
      }
    } catch (error) {
      setLoadingUpload(false);
      console.error('Error during image compression:', error);
    }
  };
  useEffect(() => {
    console.log(file);
  }, [file]);

  function onClickDeleteImage() {
    props.onChange('');
    setFile(undefined);
  }
  return (
    <div>
      <Card
        onClick={() => inputRef.current?.click()}
        isPressable={!props.value}
        className="h-fit min-h-[200px] w-full flex items-center justify-center border shadow-none hover:border-slate-400 duration-300 border-default"
      >
        {loadingUpload ? (
          <div>
            <Spinner color="white" size={'lg'} />
          </div>
        ) : (
          <>
            {props.value ? (
              <div className="w-full flex p-6 gap-6">
                <Image height={200} width={200} className="w-full  h-[200px]" alt="image uploaded" src={props.value} isBlurred />
                <div className="w-full flex flex-1 flex-col justify-between">
                  {file && (
                    <div>
                      <div>{file?.name}</div>
                      <div>{numberFormatHelper.thousandSeparator(file?.size)} Kb.</div>
                    </div>
                  )}

                  <div className="flex flex-col  gap-3 w-full">
                    <Button onPress={() => onClickDeleteImage()} className="w-full" color="danger">
                      Delete
                    </Button>
                    <Link to={props.value} target="_blank">
                      <Button className="w-full">See File</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 text-slate-500">
                <RiFolderUploadLine className="text-6xl" />
                <div>Upload image</div>
              </div>
            )}
          </>
        )}
      </Card>
      <input
        onChange={(e: any) => {
          if (e.target.files && e.target.files.length) {
            const data: any[] = Array.from(e.target.files);
            if (data[0]) {
              uploadProcess(data[0]).then();
            }
          }
        }}
        hidden
        accept="image/*"
        multiple={true}
        type={'file'}
        ref={inputRef}
      />
    </div>
  );
}

interface IProps {
  onChange: (e: string) => void;
  value?: string;
}
