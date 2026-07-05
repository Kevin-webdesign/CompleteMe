export type Collection = {
  title: string;
  label: string;
  span?: string;
  image: string;
};

export type Product = {
  title: string;
  detail: string;
  price: string;
  image: string;
  badge?: string;
  category?: string;
};

export type WishlistItem = {
  title: string;
  price: string;
  image: string;
};

export type Review = {
  name: string;
  meta: string;
  quote: string;
};

export type AdminStat = {
  label: string;
  value: string;
  change: string;
};

export type AdminRecord = {
  name: string;
  detail: string;
  status: string;
  value: string;
};

export type DemoUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "customer" | "artisan" | "admin";
};

export const authHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNdzcGqM8Y4w7_ZPI90f8S9lOr8HMLT8wABvs0ZjChGaI64hrUAxhH3EaE_TyM5FtAf7OsA5OOd4FnEX1-zVl0lvwFTG0ORrtFifFBci60Z7UOYChs6wZwLKMW4I8i5NMXKdhK85-L7JmcO_ZFPQ6y3eZgjPaa0Tci92AK0XQn6n7kwxKG1f_p-ZCr7kZ0ZYcPhfRywIv52drM7BRABvqVR_5N_LRBKLwnki7FZ_FmDj56kJLNMrbkb7m8283IrY6ZG97yrGyxAMPf";

export const demoUsers: DemoUser[] = [
  {
    id: "customer-demo",
    name: "Marie Uwase",
    email: "marie@heritage.rw",
    password: "demo1234",
    role: "customer",
  },
  {
    id: "artisan-demo",
    name: "Claude Artisan",
    email: "artisan@heritage.rw",
    password: "demo1234",
    role: "artisan",
  },
  {
    id: "admin-demo",
    name: "Admin User",
    email: "admin@heritage.rw",
    password: "admin1234",
    role: "admin",
  },
];

export const hero = {
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBYTh_esjHvzBPK6LL-FcKwUjibxdnAaQk9jQeR3UrrBuz9Rnt1dzE8Fa8LHZbfnmmXEuMaSzhhfFdAkPuwnC-_b6SCzaZI2j8e91alATu-P4BZa7FiQEABwZH9WE9QUhaIYgCrQf6A7tR4NZB70kANtEehmx5YrO1u5BHPpPnA1n4_NMlH0SahOghJSkPr71zMQvFrpuz-WCJ0OJuFErKtQphk1Jo2abO4ITqBBNyfRm-UaUuI8V8vH71Go0OhBaK-SCMJCYrqZs5X",
  detailImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBeBB8xwH4aRwpIm2YSFezAkuEgsTI1s8Oc6o9pt5G3BfBtuc_o5pcqhO8AijsckTAX1jWCaA5GY4XtsOTaF1h7DK4lq5HL5VAIRimhyl2RPgybzFYlV_DJzGFNmYonJwUbxjBZbZcJF7A6S7OptTYujmDbUzAwMaArZsJUHJeE0Nn89ZHLJkrFL_9MTpDc38D53iLnW7MR-WZryXfy_0lQHKLcov1Y3XhrLXQt9H5nBIwMbrYVCwlYBexER0Gy4yux7JtxMw6Pf7pO",
};

export const collections: Collection[] = [
  {
    title: "Artisanal Apparel",
    label: "Signature Wear",
    span: "md:col-span-2 md:row-span-2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAi-GXQuxzpldmHC6ykoSeFrE5s2_LV60jBEhAJaLLvsr2gp3Vhhr1o_CwS4dMwAmdCorUVUsuyADJrEvMKC16nI_CEKZkSF944XPBlhl3E-zbxyj22K7Z2RcXAVm6YyZjIYd7T-p7EO22g0UjRe-jXq9Z1EiOAy67JlZC4iPhWZaf_2fKt1wSrANPIIyQqucGgkHdskxQwf15cF4Ul888dNRVHAe3Cd3jkI716TdArQz1DCBcqMEGOOXoD8Y5lOH6h2M288v-nrQ0L",
  },
  {
    title: "Hand-Woven Bags",
    label: "Iconic Heritage",
    span: "md:col-span-2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Kx1rSkJpiZhtMz8E4cuzmcT_e7b-8aF-KCw4sJ8dsDogJQuCFanbYoK40n3B3EM1nfDi5kceJknRuSw7OgpHYCTLpPra1jBuXgYfqNsHbkF9ZCUTELa0eL_ftwehASBTIfDKZgMQAMWaNGjvtOMIS0l1yjgO19f0oP2rGIFol5edTGL88iWT7x9XV7F5VyIpJ14oVH_oH6Vhyhiqr9ynqgvg9zbFdz8JkIhqXr__rtivjummlHucWcNq5QMum5Zt4d_P0nDQAA5C",
  },
  {
    title: "Accessories",
    label: "Accessories",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM9wer9aFt7r-CHv6svrfvvFJcU4AtHvCxAgDzrzjlMzzqL5a2Wdpg9wYkNN3y_Slw0l-VPkOOxHs6ja_hHhMs9wBKz6vgGYDKZrEmBjG7UZr7OOtNXvLQNJgFzSvnVoSmzKxiJ-h5ihfppc2Sx9CVaiiDk9uEQ5Sv_N_iICubpF-MUnWj0mn5wZ_ggZHa07qyZM3LAO--vDibts05DEc43esW1fel9oYEUan-K2kEmGTy1zZagvnuz2cnpJPbz-seB9QyCG_gkljQ",
  },
  {
    title: "Home Decor",
    label: "Home Decor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDcZH9gIfyf-yVUpW4RcpYG08TZkk2ter8Sw2kYMsYYi9K3zr3lBbGqMBQZlFWAGgX2JRhW0p-7E6IE3K6pG0cyJKSrEv98026Q5vm8sZMDup_GDHCdCbcJbTwRA4bBiJl0C-2mZW_2f2aCGeiz5NbAPOnQFs85gigwfdQgFxI_OY1P8wEUBgiMUY19oVOMyJgtHMW0g6wPMSeUGI7ETYRTepTxUCENxr0DnjJq49nL6kcXXFId5qbGMtNlii2l6PacyXd97VXboQw",
  },
];

export const arrivals: Product[] = [
  {
    title: "Agaseke Signature Tote",
    detail: "Sisal and Grain Leather",
    price: "$245.00",
    badge: "Bestseller",
    category: "Bags",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCblaEfeWknOZt1r8OMckUeeFE-jlecktDSeFq6NwkjlXOkYGmUo7zUeHuXOClDwCCYqnqN6BgPANJLA8sJyNui9DSuA2J7FHPQOom6ayGtbX5mVpxDVGGWSdORgjC_tmG-BbeuZky4XLYC_sLPJss2g-oTd9mYiPmciW17mU9k4sbyrWwcbME7SEzQZ5U2MUxYSxeA477bKCj7SsEcdsofgxr3VxGeiP8f7NgWaxfLu6OiFr7_2MHqZVPSMxJojVXXhx-Tj0LwWJP5",
  },
  {
    title: "Linen Horizon Shirt",
    detail: "100% Organic Linen",
    price: "$110.00",
    category: "Apparel",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLvUKykuCH_CLQcXrY7lnwUCsvHWvQ9QlcoUItqeNcQdd59E0iuUPErOMV1KfswX6h1ltbm2HLcaBXuxoW4GSqnMg196zB3j_OHlQE2ySPW0NfNvXxZprdmDONjSc5g9zqu0tiSdlYhCoedHMefw-fAnit89sKIDdyCjrcV2nzNiN_GyLwjVYVOWdZQQOD1rsloH4FOn4QLVUpTZdUKioJ2GUxbHULvtBVcFNR27V6J5XI7Mdz9FMAL1_44wsVeOo9eajwYqqJUr-3",
  },
  {
    title: "Patterned Clay Vessel",
    detail: "Hand-fired Earth",
    price: "$85.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzOetD4CoS6DKS17or8rNz6y8ddlbamaDZ3z7-OFzI3W1HqzxNE3McOB5GnIhbxDRB5L6tvAgFHaM0ZxF6nz9GxJvZPV0zy42_qk7dKnOrT_6Uuj7NpduR2mOXIpxFAzMsI6RDimPkzhgvar3UMoTxzWNOwrxw_eRjLyiNTkTWJ90p6nNQCp5JvT7cVe22fmV39z24t--41rDAbnXfl7EzO06RRGZMJW_uuRfITKZPBN3i8cqXiWdVJ1YQa0Mb68x5NFtX1mSOrMx2",
  },
  {
    title: "Terra Woven Slides",
    detail: "Calf Leather and Sisal",
    price: "$135.00",
    badge: "New",
    category: "Accessories",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBN4uCyKPAZDGLCvGrb_I45bALRaGiCaKC0QRzss2L7k7_YxjoQQISND-7pIjHJDdLCGo_R28avnDbTHPvvlVYTPVGo5Y3hNUUgI6L29XNdpZVpqOJX0DnSs4rU1fp3VSblmC0Ttf5RwUDIP2bSpBjNmrv_I2fKEb4IHNLRT9XpjA7cC7Xa2U2IxAK2KTpJc0foLLT6syFjdmv580BhQ1hCv8EeCEc3tnMozoypbTBIFeqYfcpM2sbumiceeev5GWz1sHTLlz9dbTHi",
  },
];

export const cartItems: Product[] = [
  {
    title: "Uruhimbi Heritage Tote",
    detail: "Handcrafted Leather",
    price: "$285.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDY3bkxZGLGE1qiwO1D4S3Wtmm7AQTU72vj6gwb0YrnsHVs_tn1IDnFGPYEjvr3tdmQyfkJdulM6LO4x64Oa3IWGG7ZVr3hUkB94oViJcRlpjCvtFlQVtpgQnP9pdE8wPQun1RKC7cLLr-cWQKgvAP4FPLNblJiT52CeS1eVsDT8N8Filx_sumIDSu1pGhD-GGFZ7Uf6Q0Sx5qyZasLH9erz9gylOm64HICMMoT1Crct2yfwizpQOeiliCWbHkiP9jTnhnnx1iooi1K",
  },
  {
    title: "Agaseke Sun Clutch",
    detail: "Hand-Woven Fiber",
    price: "$145.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIoBj0TOMogw3kGRO9sLVJLHVKZKzZ1ZetJCjHQXew-SoeL1ASh59v83fxs22nARQC-eY0EXf2BumHqKKePgaSu7UB06nQzv9rWQk6rp_W2l-hzIPo41SduJQ8r9dxOgzE831z_WYq71JvDeWz8LMNu55aPlH9CzRfPirmwuTyc-ax_J2KNJicb5db4HXXDVsiAiChQtVfDfBEYYUKruQ6t1ouCS077KcsuJtdB1oKsI0OK5smGHUbmivaI61MiLge6J276G2ZBmDZ",
  },
];

export const wishlist: WishlistItem[] = [
  {
    title: "Artisan Brass Belt",
    price: "$85.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr47Fe0TpRLXjAC38TnaYOWXWwi_qMMJspzt7lLdHJJyKNQeAIkGqCXiEQjXBu2sMjsODbT1te3h7fsT8MpC_T-eX_mvdXMo_VCbmv7iwI-RdsSUAXZ4i2kMxdkEsTRwWfiTKI4Hn9pK0Rh1HV15olr3gXwbmAegRw9IdZs1CuzHEpbSBj1lylRZoNCibnr75u_7gBTICnF2mfHNj__0YyZasIndYXpD9b718gIX_R_JAoX-_v2mYbonKVrOE6Zwa_O_ZY5BBo4kx0",
  },
  {
    title: "Imigongo Silk Scarf",
    price: "$120.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8s3RKU1DhG3vtlVlx779nk7d2qTYUUi50fw38iMF0o399FlHXShOH_IQcgUcoH6oOBk73LHXmMsWFY6ccXjst3349Y-JS00AeV5meQrvU8xLKrrmt8z8UmwWP1hB1mZYVC3igIV_icPNsoYmzU1O4QaG7WPCKsHJdm1--yew5YB4-yFaK6qXwYIqHA9PG6EcEY82iui_NzAb93B3xZHqu1mbEEkGuybr1Cw4ry5YaYUfnoqGfXG3J32Bj-Z3xqJJk0utGvg_ASLkO",
  },
  {
    title: "Basalt Inlay Earrings",
    price: "$65.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSnmdWW2CkfFL9m9GtAd2ADZizqO5xH-wwktC5V5B3hrvFY_wwMA9C1soSiDRf0iq2vjH9t6eaOZ2TN72tFAcbycw7Gez_-uydmYv1WRo31CVxTuxGEOUm2y1TI_ugEdMD4UjKcm9-hQyPLf718zXmgc8GBLpqiArYfJxjLtH1-PH5YkKewlXkljCqB4ShzxcEHyB-EVKia66_o-id7Hfl2MUI6ixVXG5ueDNIk7RCPkvhLlO83HFw_cdya9k0r-Bg0M_k3rhbHVhg",
  },
];

export const admired: WishlistItem[] = [
  {
    title: "Midnight Imigongo Clutch",
    price: "$185.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGvpHz_5FYBQJ5Sun5cowfeaXtEwrMSp6dYOf9SHO2f_1pEJ6xPnYX0zFqmT6KEnpl91v-HG7oRWm7kGOOQ7v5xu8Xj6KCCRklMVvtHr1cFoRbc7zIZ38ngLU5IeF4TBYy_IELohc4s0kUnS5C_j_TyDoh2GkTlaVs-1iuKqtesxpX043FPc1Ld3gYib0hfASqyHWgKf1vNi2tw5ozqphp7xlcvbbb5puZm1tVS6jBEPewYnkOOKd9GmEc8R4rrZ1r3jUSOTrcPvGO",
  },
  {
    title: "Artisan Crossbody - Ochre",
    price: "$210.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-eRQuzLTTTbdjfll0J_gjm7x-zzek1k0qIV2YBUFfNkaylSju6YrgVFMDZzq0kcdqCEjebz9P7byOINhkWcK-zRqrY1S9IEwIbwPvysjniAdUrivETCZCJzyu6ff9UrGW8SgNnLBNoORBG5ojtqBe2BHe_Afpt__PeojFYwEfbhClf_FcmAiJ4l_xOtujpcRHVHFqHyrnkljoGSwOzeIq_kv1NM9FVnJufgo_D20yz4x3MAChDXaArsrOsq--v2XIV1-7O3CA7fyh",
  },
  {
    title: "Heritage Weekender",
    price: "$320.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXZU3W7VMZol5Wuql6duUwKRFGROv0Pp8dNuM2CmFuQaF1LY3kv6sEw-F6wiV1T7R47SZP6mNLx8ZM3va-oA4H82kP2Eq9Eaaq3JTGydYQaY-CzCreFEJsfWmDEYs718xCgG-fU8qGOGbmRgsrutQd2Wqos1dVnsEcK_lyurS8zZX7Bc6ILq517u5V8NRvU7gIGNTkPUX0aqFhWPblyetOWX7ZiEaThgw89N5rI3Q7IkkpK-NViX0dL9JpMuOptt4lUPqWx9ckvFdD",
  },
  {
    title: "Embroidered Coin Purse",
    price: "$45.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWH9Ddk25m_7naVlxRhHGNmak7JQStZ8oWvTXBohxVutwgynNX7O7RQM2qBW_3D9d4UMHOVQPZ_q_FpxYYDa9M31dv9fZ64kwQh6d96RfbLsVCuz4ilY9g21VqxyQjIG_owLLdHdHnFG4i4UrsU4RHfH0RaH4zhb0qHqPcPxRma1hPb4GM6uek2TwbCcA5Uj7ix1N_OsFZXKkb2sEuf1b_XXwCl44fDU7_e-S_ZhZF8u1XueD8WFG-Pr9DAKUx9d_nH48-L-rxuAsb",
  },
];

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    meta: "Verified Buyer - 2 weeks ago",
    quote:
      "The quality is incomparable. The stitching is precise, the leather feels premium, and it carries a beautiful piece of Rwandan culture everywhere it goes.",
  },
  {
    name: "David K.",
    meta: "Verified Buyer - 1 month ago",
    quote:
      "Incredible craftsmanship. It is spacious without looking bulky, and every detail feels considered.",
  },
];

export const storyImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuADd8ip4ATLBjNMW1SXeSRk49jMGKu5HPM9TsFu8pi00fi3K17C87my3QZCfRge6RJD61lNUUzA3DG1zsTOwlef8MLXedyl-s-495CO_TBpaZxAWeas_5Rl2TcgR_Wg_8UuY62k0KxByOKToEgHeNRQ8gSst0GCKFZmRoUaliB_MiLXDenzYYnhFRDE2l2YzDgQZcpzXu_wVcAgU3X_udGqCW3yJ6SS_eJv7shRy4RZHD4aLYPxs6MCEDEfCrKEy6HCVnTEyOyfiS54";

export const adminStats: AdminStat[] = [
  { label: "Revenue", value: "$18,430", change: "+12.4%" },
  { label: "Orders", value: "248", change: "+8.1%" },
  { label: "Products", value: "64", change: "+6 new" },
  { label: "Customers", value: "1,294", change: "+18.7%" },
];

export const adminProducts: AdminRecord[] = arrivals.map((product) => ({
  name: product.title,
  detail: product.detail,
  status: product.badge ?? "Active",
  value: product.price,
}));

export const adminOrders: AdminRecord[] = [
  { name: "WS-1048", detail: "Sarah M. - Kigali", status: "Paid", value: "$430.00" },
  { name: "WS-1047", detail: "David K. - Nairobi", status: "Fulfillment", value: "$245.00" },
  { name: "WS-1046", detail: "Aline U. - Brussels", status: "Shipped", value: "$365.00" },
];

export const adminCustomers: AdminRecord[] = [
  { name: "Sarah M.", detail: "48 lifetime orders", status: "VIP", value: "$4,820" },
  { name: "David K.", detail: "12 lifetime orders", status: "Active", value: "$1,120" },
  { name: "Aline U.", detail: "7 lifetime orders", status: "Active", value: "$860" },
];

export const adminReviews: AdminRecord[] = reviews.map((review) => ({
  name: review.name,
  detail: review.quote,
  status: "5 stars",
  value: review.meta,
}));

export const adminCategories: AdminRecord[] = collections.map((collection, index) => ({
  name: collection.title,
  detail: collection.label,
  status: "Published",
  value: `${index + 8} items`,
}));
