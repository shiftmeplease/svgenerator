<script>
  import ColorPicker from "svelte-awesome-color-picker";
  import InputOption from "./CustomPicker/Input.svelte";
  import SelectorWrapper from "./CustomPicker/Wrapper.svelte";
  export let value = "#fff";
  export let label = "Label";
</script>

<ColorPicker
  bind:hex={value}
  components={{ input: InputOption, wrapper: SelectorWrapper }}
  isAlpha={false}
  {label}
/>
