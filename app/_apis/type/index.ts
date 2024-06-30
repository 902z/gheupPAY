export type ShopData = {
  shopDetail: {
    item: {
      id: string;
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
      user: {
        item: {
          id: string;
          email: string;
          type: string;
        };
        href: string;
      };
    };
  };
};

export type noticeDetail = {
  noticeDetail: {
    item: {
      id: number;
      hourlyPay: number;
      startsAt: string;
      workhour: number;
      description: string;
      closed: false;
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
  };
};

export type NoticeCardContents = {
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
};

export type AlertData = {
  offset: number;
  limit: number;
  count: number; // 전체 개수
  hasNext: boolean; // 다음 내용 존재 여부
  items: {
    item: {
      id: string;
      createdAt: string;
      result: "accepted" | "rejected";
      read: boolean;
      application: {
        item: {
          id: string;
          status: "pending" | "accepted" | "rejected";
        };
        href: string;
      };
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
      notice: {
        item: {
          id: string;
          hourlyPay: number;
          description: string;
          startsAt: string;
          workhour: number;
          closed: boolean;
        };
        href: string;
      };
      links: Array<object>;
    };
  }[];
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
    {
      rel: "user";
      description: "사용자 정보";
      method: "GET";
      href: string;
    },
  ];
};
