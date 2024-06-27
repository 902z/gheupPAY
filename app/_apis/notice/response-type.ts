export interface NoticeResponse {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  address: string;
  keyword: string;
  items: [
    {
      item: {
        id: number;
        hourlyPay: number;
        startsAt: string;
        workhour: number;
        description: string;
        closed: boolean;
        shop: {
          item: {
            id: string;
            name: string;
            category: string;
            address1: string;
            address2: string;
            description: string;
            imageUrl: string;
            originalHourlyPay: number;
          };
          href: string;
        };
      };
      links: [
        {
          rel: "self";
          description: "공고 정보";
          method: "GET";
          href: string;
        },
      ];
    },
  ];
  links: [
    {
      rel: "self";
      description: "현재 페이지";
      method: "GET";
      href: string;
    },
    {
      rel: "prev";
      description: "이전 페이지";
      method: "GET";
      href: string;
    },
    {
      rel: "next";
      description: "다음 페이지";
      method: "GET";
      href: string;
    },
  ];
}
