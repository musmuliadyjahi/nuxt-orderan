<template>
  <div class="container">
    <div class="text-center">
      <h4 class="mb-5" style="margin-top: 100px;">Menu</h4>
      <div class="row mb-3">
        <div v-for="product in products" :key="product.id" class="col-3 mb-4">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.title }} - {{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div>
          <h4 class="mb-3 mt-4">Form Pemesanan</h4>

          <form>
            <div class="form-group nama">
              <label for="nama">Nama</label>
              <input
                v-model="product.name"
                type="text"
                class="form-control"
                placeholder="Masukkan nama anda"
              />
            </div>
            <div class="form-group menu">
              <label for="nama">Menu</label>
              <input
                v-model="product.title"
                type="text"
                class="form-control"
                placeholder="Masukkan menu pesanan anda"
              />
            </div>
            <div class="form-group menu">
              <label for="nama">Harga Pesanan</label>
              <input
                v-model="product.price"
                type="text"
                class="form-control"
                placeholder="Masukkan harga pesanan anda"
              />
            </div>
            <div class="input-group-append">
              <button
                @click.prevent="add"
                class="btn btn-secondary"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-6">
        <div class="card rounded-0 checkout-detail">
          <div class="card-body">
            <h5 class="card-title">Informasi Pesanan</h5>
            <div class="row mb-3">
              <div class="col">
                <h6 class="m-0">Cappucino</h6>
                <small style="color: #B7B7B7;">2 Items</small>
              </div>
              <div class="col d-flex justify-content-end">
                <h6 class="m-0 align-self-center text-success">
                  Rp. 70.000
                </h6>
              </div>
            </div>

            <hr />

            <div class="row mb-3">
              <div class="col">
                <h6 class="m-0">Courier</h6>
                <small style="color: #B7B7B7;">JNT Express</small>
              </div>
              <div class="col d-flex justify-content-end">
                <h6 class="m-0 align-self-center text-success">
                  IDR 201.000
                </h6>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <h6 class="m-0">Promo</h6>
                <small style="color: #B7B7B7;">50%</small>
              </div>
              <div class="col d-flex justify-content-end">
                <h6 class="m-0 align-self-center text-danger">
                  Rp. 100.000
                </h6>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <h6 class="m-0">Total Harga</h6>
              </div>
              <div class="col d-flex justify-content-end">
                <h6 class="m-0 align-self-center text-primary">
                  Rp. 500.000
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col">
            <button
              type="button"
              class="btn btn-block"
              style="background-color: #EAEAEF; color: #ADADAD;"
            >
              Cancel
            </button>
          </div>
          <div class="col">
            <button
              type="button"
              class="btn btn-warning btn-block text-white"
              data-toggle="modal"
              data-target="#checkoutModal"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['products']),
  methods: {
    add() {
      this.$store.dispatch('submitData', this.product)
      this.product = {
        name: '',
        title: '',
        price: ''
      }
    }
  }
}
</script>
