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

export type UserProfileData = {
  item: {
    id: string;
    email: string;
    type: string;
    name: string;
    phone: string;
    address: string;
    bio: string;
    shop: any | null;
  };
};

export type UserApplication = {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: {
    item: {
      id: string;
      status: string;
      createdAt: string;
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
    };
    links: {
      rel: string;
      description: string;
      method: string;
      href: string;
    }[];
  }[];
  links: {
    rel: string;
    description: string;
    method: string;
    href: string;
  }[];
};
