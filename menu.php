<?php
$menuItems = [
    ['name' => 'Espresso', 'price' => '$3'],
    ['name' => 'Cappuccino', 'price' => '$4'],
    ['name' => 'Croissant', 'price' => '$2.5'],
    // Add more items here
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu | Kafika Bakery + Café</title>
</head>
<body>
    <h1>Our Menu</h1>
    <ul>
        <?php foreach ($menuItems as $item): ?>
            <li><?php echo $item['name'] . ' - ' . $item['price']; ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>