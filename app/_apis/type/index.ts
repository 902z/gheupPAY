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

export type UserInfo = {
  item: {
    id: string;
    email: string;
    type: "employee" | "employer";
    name: string;
    phone: string;
    address: string;
    bio: string;
    shop?: {
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
    };
  };
  links: [];
};

export type ShopInfo = {
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
        type: "employer" | "employee";
        name: string;
        phone: string;
        address: string;
        bio: string;
      };
      href: string;
    };
  };
  links: [];
};

export type CreateNoticeRequest = {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
};

export type CreateNoticeResponse = {
  item: {
    id: "string";
    hourlyPay: "number";
    startsAt: "string";
    workhour: "number";
    description: "string";
    closed: "boolean";
    shop: {
      item: {
        id: "string";
        name: "string";
        category: "string";
        address1: "string";
        address2: "string";
        description: "string";
        imageUrl: "string";
        originalHourlyPay: "number";
      };
      href: "string";
    };
  };
  links: [];
};
