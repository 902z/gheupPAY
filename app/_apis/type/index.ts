export interface PostToken {
  item: {
    token: string; // jwt 토큰 decode하면 payload에 userId 활용 가능 (참고)
    user: {
      item: {
        id: string;
        email: string;
        type: "employer" | "employee";
        name: string; // optional
        phone: string; // optional
        address: string; // optional
        bio: string; // optional
      };
      href: string;
    };
  };
  links: [];
}

export interface GetNotices {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  address: string[];
  keyword: string;
  items: {
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
    links: {
      rel: string;
      description: string;
      method: string;
      href: string;
    }[];
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
  ];
}

export interface GetShopShopIdNotices {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: {
    item: {
      id: string;
      hourlyPay: number;
      startsAt: string;
      workhour: number;
      description: string;
      closed: boolean;
    };
    links: Array<object>;
  }[];
  links: Array<object>;
}

export interface PostShopsShopIdNotices {
  item: {
    id: string;
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
  links: Array<object>;
}

export interface GetShopsShopIdNoticesNoticeId {
  item: {
    id: string;
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
    currentUserApplication: {
      item: {
        id: string; // application.id,
        status: "pending" | "accepted" | "rejected" | "canceled"; // application.status
        createdAt: string; // application.createdAt
      };
    };
  };
  links: Array<object>;
}

export interface PutShopsShopIdNoticesNoticeId {
  item: {
    id: string;
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
  links: Array<object>;
}

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

export type NoticeDetail = {
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
