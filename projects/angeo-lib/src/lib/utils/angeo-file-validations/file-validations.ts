export class FileValidations {
  public static buildMultipartWithImages(
    dataMultipart: FormData,
    multipartName: string,
    files: File[]
  ): FormData {
    if (files.length) {
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        dataMultipart.append(multipartName, element, element.name);
      }
    }
    return dataMultipart;
  }

  public static validateExtension(fileName: string, extensions: string[]) {
    const format = fileName?.split('.')?.pop()?.toLowerCase() ?? '';
    return extensions.includes(format);
  }

  public static validateSize(file: number, size = 3145728) {
    return file < size;
  }
}
