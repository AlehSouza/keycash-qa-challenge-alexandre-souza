import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  it("renders card when passed", () => {
    const property = {
      address: {
        formattedAddress: "Rua Bandeira Paulista, 594 Itaim Bibi - SP",
      },
      images: ["https://i.imgur.com/ad0cUuB.jpg"],
    };
    const wrapper = shallowMount(Card, {
      propsData: { property },
    });
    expect(wrapper.text()).toContain(
      "Rua Bandeira Paulista, 594 Itaim Bibi - SP"
    );
  });
  it('Render cards with price and address', () => {
    const property = {
      address: {
        formattedAddress: "Rua Bandeira Paulista, 594 Itaim Bibi - SP",
      },
      images: ["https://i.imgur.com/ad0cUuB.jpg"],
      price: 99999999
    };
    const wrapper = shallowMount(Card, {
      propsData: { property },
    });
    expect(wrapper.text()).toContain(
      'Rua Bandeira Paulista, 594 Itaim Bibi - SP R$ 99,999,999.00'
    )
  })
});