def convert_to_relative_units(w: int, h: int, base_font_size: int = 16) -> None:
    # Screen dimensions
    screen_width = 1900
    screen_height = 780

    # Calculate percentage values
    width_percent = (w / screen_width) * 100
    height_percent = (h / screen_height) * 100

    # Calculate rem values
    width_rem = w / base_font_size
    height_rem = h / base_font_size

    # Display the results
    print(f"Width: {w}px -> {width_percent:.2f}% | {width_rem:.2f}rem")
    print(f"Height: {h}px -> {height_percent:.2f}% | {height_rem:.2f}rem")

# Example usage:
convert_to_relative_units(318, 303)
