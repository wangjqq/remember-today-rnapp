import RNFS from 'react-native-fs';

// 检测文件是否存在
export const existsFile = async (fileName: string) => {
  const path = RNFS.ExternalCachesDirectoryPath + '/' + fileName;
  const res = await RNFS.exists(path);
  return res;
};

// 删除文件
export const delFile = async (fileName: string) => {
  const path = RNFS.ExternalCachesDirectoryPath + '/' + fileName;
  const res = await RNFS.unlink(path);
  return res;
};

/*将文本写入本地 txt*/
export const writeFile = (fileName: string, content: string) => {
  // create a path you want to write to
  const path = RNFS.ExternalCachesDirectoryPath + '/' + fileName;

  // write the file
  RNFS.writeFile(path, content, 'utf8')
    .then(success => {
      // console.log('success', success);
    })
    .catch(err => {
      console.log(err.message);
    });
};

/*读取txt文件内容*/
export const readFile = (fileName: string) => {
  // create a path you want to delete

  const path = RNFS.ExternalCachesDirectoryPath + '/' + fileName;

  return RNFS.readFile(path)
    .then(result => {
      // console.log(result);
      return result;
    })
    .catch(err => {
      console.log(err.message);
    });
};

/*在已有的txt上添加新的文本*/
export const appendFile = (fileName: string, content: string) => {
  const path = RNFS.ExternalCachesDirectoryPath + '/' + fileName;

  return RNFS.appendFile(path, content, 'utf8')
    .then(success => {
      // console.log('success');
    })
    .catch(err => {
      console.log(err.message);
    });
};

/*下载文件*/
// export const downloadFile = () => {
//   // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)

//   // 图片
//   // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.jpg`;
//   // const formUrl = 'http://img.kaiyanapp.com/c7b46c492261a7c19fa880802afe93b3.png?imageMogr2/quality/60/format/jpg';

//   // 文件
//   // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.zip`;
//   // const formUrl = 'http://files.cnblogs.com/zhuqil/UIWebViewDemo.zip';

//   // 视频
//   // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.mp4`;
//   // http://gslb.miaopai.com/stream/SnY~bbkqbi2uLEBMXHxGqnNKqyiG9ub8.mp4?vend=miaopai&
//   // https://gslb.miaopai.com/stream/BNaEYOL-tEwSrAiYBnPDR03dDlFavoWD.mp4?vend=miaopai&
//   // const formUrl = 'https://gslb.miaopai.com/stream/9Q5ADAp2v5NHtQIeQT7t461VkNPxvC2T.mp4?vend=miaopai&';

//   // 音频
//   const downloadDest = `${RNFS.MainBundlePath}/${
//     (Math.random() * 1000) | 0
//   }.mp3`;
//   // http://wvoice.spriteapp.cn/voice/2015/0902/55e6fc6e4f7b9.mp3
//   const formUrl =
//     'http://wvoice.spriteapp.cn/voice/2015/0818/55d2248309b09.mp3';

//   const options = {
//     fromUrl: formUrl,
//     toFile: downloadDest,
//     background: true,
//     begin: res => {
//       console.log('begin', res);
//       console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
//     },
//     progress: res => {
//       let pro = res.bytesWritten / res.contentLength;

//       this.setState({
//         progressNum: pro,
//       });
//     },
//   };
//   try {
//     const ret = RNFS.downloadFile(options);
//     ret.promise
//       .then(res => {
//         console.log('success', res);

//         console.log('file://' + downloadDest);

//         // 例如保存图片
//         CameraRoll.saveToCameraRoll(downloadDest)
//           .then(() => {
//             Toast.showShortCenter('图片已保存到相册');
//           })
//           .catch(() => {
//             Toast.showShortCenter('图片保存失败');
//           });
//       })
//       .catch(err => {
//         console.log('err', err);
//       });
//   } catch (e) {
//     console.log(error);
//   }
// };
