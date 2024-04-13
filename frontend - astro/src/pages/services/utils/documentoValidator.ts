export const validaDocumento = async (documento: string) => {
  if (documento.length == 11) {
    const response = await fetch(
      `https://api.digital.gob.do/v3/cedulas/${documento}/validate`
    );

    const responseObject = await response.json();

    return responseObject.valid;
  } else if (documento.length == 9) {
    console.log("RNCCC");
    console.log(documento.length);

    let vnTotal = 0;
    const digitoMult: number[] = [7, 9, 8, 6, 5, 4, 3, 2];
    let vcRNC = documento.replace("-", "").replace(" ", "");
    const vDigito: string = vcRNC.substring(8, 9);

    if (
      vcRNC.length !== 9 ||
      !["1", "4", "5"].includes(vcRNC.substring(0, 1))
    ) {
      return false;
    }

    for (let vDig = 1; vDig <= 8; vDig++) {
      const vCalculo =
        parseInt(vcRNC.substring(vDig - 1, vDig)) * digitoMult[vDig - 1];
      vnTotal += vCalculo;
    }

    if (
      (vnTotal % 11 === 0 && vDigito === "1") ||
      (vnTotal % 11 === 1 && vDigito === "1") ||
      (11 - (vnTotal % 11)).toString() === vDigito
    ) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
