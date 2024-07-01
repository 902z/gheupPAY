import { makeAlertMockData } from "@/app/_components/header/_component/_component/alert/mockdata";
import { HttpResponse, http } from "msw";

/**
 * @author 이승현
 * @description
 * handlers를 이용해서 msw를 사용할 수 있습니다.
 * 1. app 에 있는 layout.tsx에서 MswComponent 주석 해제합니다.
 * 2. msw의 문법을 이용해서 handlers 배열에 원하는 api를 추가합니다.
 * 3. npx msw init ./public --save 로 변경된 사항에 대한 mock 파일을 생성합니다.
 *
 * @error 해결 방법
 * 무언가를 지워서 mock파일과 달라졌을 경우 에러가 발생할 수 있습니다.
 *
 * npx msw init ./public --save 으로 다시 빌딩하셔서 해결하시면 됩니다.
 */
export const handlers = [
  http.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/*/alerts`,
    ({ request, params, cookies }) => {
      const offset = new URL(request.url).searchParams.get("offset");
      if (offset === "0") {
        const alertMockData1 = makeAlertMockData();
        return HttpResponse.json(alertMockData1);
      } else if (offset === "6") {
        const alertMockData2 = makeAlertMockData();
        console.log("다음 offset으로 이동");
        return HttpResponse.json(alertMockData2);
      } else {
        const alertMockData3 = makeAlertMockData();
        return HttpResponse.json(alertMockData3);
      }
    },
  ),
];
